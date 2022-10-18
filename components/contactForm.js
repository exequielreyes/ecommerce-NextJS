// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import Image from "next/image";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mrgdlayn");
  if (state.succeeded) {
      return <div className='text-center  '><p className=" mb-8 text-lg ">Gracias por comunicarte con nosotros! 
           
           </p>
           <Image 
            src="/img/descarga.png"
            width={400}
            height={400}
            />
           </div> 
  }
  return (
      <section className='py-10 bg-white-100 flex justify-around'>

      <div className='w-1/2 mx-4' >

        <h2 className=' text-start  font-nova   text-4xl'>Contactame</h2>

        <p className='text-start   text-2xl mt-5'>Sientase libre de consultar cualquier sugerencia en el siguiente formulario</p>
      
      <div className='bg-white rounded-xl shadow-lg p-8 mt-6'>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">


        <div>
            <label htmlFor="name" className='text-base font-bold'>
                Nombre
            </label>
        </div>  

        <div>
            
            <input
                id="name"
                type="text" 
                name="name"
                placeholder='Ingrese su nombre'
                className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2'
                required
            />
         
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            </div> 




        <div>
            <label htmlFor="email" className='text-base font-bold'>
                Email
            </label>
        </div>  

        <div>
            
            <input
                id="email"
                type="email" 
                name="email"
                placeholder='Ingrese su correo electronico'
                className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2'
            
            />
         
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            </div> 

        <div>
            <label htmlFor="message" className='text-base font-bold'>
                Mensaje
            </label>
        </div> 
        <div>    
      <textarea
        id="message"
        name="message"
        required
        className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2'
            
        
      />
      
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>  
      <button type="submit" disabled={state.submitting} className="inline-block self-end  bg-violet-500   hover:bg-indigo-600 text-white font-bold px-6 py-4 rounded-lg text-sm">
        Enviar
      </button>
      
    </form>
    </div>
        </div>
    </section>
  );
}

export default ContactForm;