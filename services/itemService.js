export async function  getItems() {
    const request = await fetch("http://localhost:3000/api/items");
    const items = await request.json();

    return items;

 }

 //cantidad de articulos a mostrar en el inicio

 export  async function getLatestItems() {
    const items = await getItems();

    return items.slice(0, 6);
 }