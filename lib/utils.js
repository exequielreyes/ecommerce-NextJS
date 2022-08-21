 import { getItems } from "../services/itemService";

//TODO: para buscar todos los id hacemos esta funcion
 export async function getPathsFromIds(){
    const items = await getItems();
    const ids =  items.map((item) => {
        return{
            params:{
                // id: item.id.toString(),
                id: convertToPath(item.title),
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

export  function convertToPath(title) {
    return title.toLowerCase().replace(/\s/g, '-');
}