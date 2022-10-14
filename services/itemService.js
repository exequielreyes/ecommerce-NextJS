export async function  getItems() {
   //aca hacemos el llamado de nuestros datos a una api que en este caso tenemos internamente dentro de nuestro proyecto
    const request = await fetch("http://localhost:3000/api/items");
    //aca ya guardamos los elementos 
    const items = await request.json();

    return items;

 }

 //cantidad de articulos a mostrar en el inicio
 export  async function getLatestItems() {
    const items = await getItems();

    return items.slice(0, 6);
 }