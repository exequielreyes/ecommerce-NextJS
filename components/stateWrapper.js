import { createContext, useContext, useState } from "react"


const AppContext = createContext({
    isOpen: false,
    items: [],
    openCart: () => {},
    closeCart: () => {},
    addItemToCart: (item) => {},
    getNumberOfItems:() => {},
});


export default function StateWrapper({children}) {
    
const [isOpen , setIsOpen] = useState(false);
const [items , setItems] = useState([]);

function handleOpenCart(){
    setIsOpen(true);
}

function handleCloseCart() {
    setIsOpen(false);
}

function handleAddItemToCart(item) {
    const temp = [...items];
    const found = temp.find(product => product.id === item.id); //devuelve el primer elemento

    if(found){
        found.qty++;
    }else{
        item.qty = 1;
        temp.push(item)
    }

//Actualizar el estado
    setItems([...temp]);

}


function handleNumberOfItems() {
    const total = items.reduce((acc, item) => acc + item.qty , 0) //regresamos el acumulador de las sumas de los productos de la prop qty

return total;
}

    return(

        <AppContext.Provider 
        value={{
            isOpen,
            items,
            openCart: handleOpenCart,
            closeCart: handleCloseCart,
            addItemToCart: handleAddItemToCart,
            getNumberOfItems: handleNumberOfItems,
        }}>{children}</AppContext.Provider>
        
    )
}


export function useAppContext() {
    return useContext(AppContext)
}