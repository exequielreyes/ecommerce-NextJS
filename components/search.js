 
import { createAutocomplete } from '@algolia/autocomplete-core'
import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { convertToPath } from '../lib/utils'



const AutocompleteItem = ({title, image, price }) => {
    return (
      <li>
        <Link href={`/store/${convertToPath(title)}`}>
          <a className="hover:bg-blue-300 flex gap-4 p-4">
            <img src={image} alt={title} className='w-12 h-12 object-contain' height={100} width={100} />
            <div>
              <h3 className='text-sm font-semibold'>{title}</h3>
              <p className='text-xs text-red-600'>${price}</p>
            </div>
          </a>
        </Link>
      </li>
    )
  }


 
 export default function Search(props) {

    const [autocompleteState, setAutocompleteState] = useState({
        collections: [], //tenemos todas las colecciones
        isOpen: false
      })
    
    
      const autocomplete = useMemo(() => createAutocomplete({
        placeholder: 'Busca el producto',
        onStateChange: ({ state }) => setAutocompleteState(state), //se ejecuta cada vez que se actualiza el estado con setAuto..
        getSources: () => [{
          sourceId: 'offers-next-api',
          getItems: ({ query }) => {  //aqui recuperamos los datos para esta fuente
            if (!!query) {
              return fetch(`/api/search?q=${query}`) //si tenemos un valor
                .then(res => res.json())
            }
          }
        }],
        ...props
      }), [props])

//creamos las referencias de nuestro elementos que vamos a tener que pasar al autocomplete
      const formRef = useRef(null)
      const inputRef = useRef(null)
      const panelRef = useRef(null) //donde se dibujar los resultados de la busqueda
    
      const formProps = autocomplete.getFormProps({
        inputElement: inputRef.current
      })
      const inputProps = autocomplete.getInputProps({
        inputElement: inputRef.current
      })
    





    return(
        <form ref={formRef}  className="flex justify-center items-center " {...formProps} >
            <div className="flex relative p-1  bg-gradient-to-tr from-gray-600   from-gr  to-ligthgray-300 rounded-full   ml-70  h-12 ">
                <input ref={inputRef}   className='flex-1 p-2 pl-4 rounded-full w-96'   {...inputProps} />
            
                {
        autocompleteState.isOpen && (
          <div className="absolute mt-16 top-0 left-0 border border-gray-100 bg-white overflow-hidden rounded-lg shadow-lg z-10" ref={panelRef} {...autocomplete.getPanelProps()}>
            {autocompleteState.collections.map((collection, index) => {
              const { items } = collection
              console.log({items})
              return (
                <section key={`section-${index}`}>
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {
                        items.map(item => <AutocompleteItem key={item.id} {...item} />)
                      }
                    </ul>
                  )}
                </section>
              )
            })}
          </div>
        )
      }
            
            
            </div>
        </form>
    )
 }