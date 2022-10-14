import { createContext, useContext, useState, useEffect } from "react"

//definimos el contexto(metodos a implementar)
const AppContext = createContext({
    isOpen: false, //si el carrito esta abierto o no
    items: [],  //almacenamos el id(consultamos el elemento) y la cantidad(sacamos el subtotal de un producto especifico)
    openCart: () => {},
    closeCart: () => {},
    addItemToCart: (item) => {},
    getNumberOfItems:() => {},
    removeItenToCart:(item) => {},
});

export default function StateWrapper({children}) {

const [isOpen , setIsOpen] = useState(false);
const [items , setItems] = useState([]);

useEffect(() => {
    const itemsLS = window.localStorage.getItem("itemsCart") ?? "[]" ;
    console.log('itemsLS', itemsLS);
    setItems(JSON.parse(itemsLS))
},[]);




function handleOpenCart(){
    setIsOpen(true);
}

function handleCloseCart() {
    setIsOpen(false);
}

function handleAddItemToCart(item) {
    const temp = [...items];
    const found = temp.find(product => product.id === item.id); //buscamos el producto ydevuelve el primer elemento
    console.log("temp",temp);
    // si lo encuentra actualiza la propiedad de qty
    if(found){
        found.qty++;
        window.localStorage.setItem("itemsCart", JSON.stringify(temp));

    }else{
        //si no lo encuentra actualiza el elemento y lo inserta
        item.qty = 1;
        temp.push(item)
        window.localStorage.setItem("itemsCart", JSON.stringify(temp));
    }

//Actualizar el estado

console.log("temp debajo  de actualizar estado", [...temp]);

    setItems([...temp]);
}


//Eliminar producto del carrito
function handleRemoveItemToCart(item){
    const temp = [...items];
    const carritoActualizado = temp.filter(product => product.id !== item.id)
    window.localStorage.setItem("itemsCart", JSON.stringify(carritoActualizado));
    setItems(carritoActualizado)
}


//suma el numero de elementos que tenemos dentro del carrito
function handleNumberOfItems() {
    const total = items.reduce((acc, item) => acc + item.qty , 0) //regresamos el acumulador de las sumas de los productos de la prop qty
return total;
}

    return(
//colocamos los valores de nuestra propiedades
        <AppContext.Provider 
        value={{
            isOpen,
            items,
            openCart: handleOpenCart,
            closeCart: handleCloseCart,
            addItemToCart: handleAddItemToCart,
            getNumberOfItems: handleNumberOfItems,
            removeItenToCart: handleRemoveItemToCart,
        }}>{children}
        </AppContext.Provider>
        
    )
}


export function useAppContext() {
    return useContext(AppContext)
}