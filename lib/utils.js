 import { getItems } from "../services/itemService";

//TODO: para buscar todos los id hacemos esta funcion
 export async function getPathsFromIds(){
    const items = await getItems(); //regresa nuestro json
    const ids =  items.map((item) => {
        return{
            params:{
                // id: item.id.toString(),
                id: convertToPath(item.title), //el id tiene que ser el mismo que le pusimos en el archivo
            },
        }
        
        });

        return ids;
    }


export async function getItemData(id) {
    //TODO: Obtenemos todos los elementos
    const items = await getItems();

//    const product =  items.find((item) => item.id.toString() === id)
   const product =  items.find((item) => convertToPath(item.title) === id)

   return {
    id: id ,
    data: product,
   };
}

//lo volvemos minusculas y lo remplazamos por - a los espacio
export  function convertToPath(title) {
    return title.toLowerCase().replace(/\s/g, '-');
}