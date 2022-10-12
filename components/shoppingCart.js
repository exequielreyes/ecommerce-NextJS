
import { useAppContext } from "./stateWrapper"
import style from "../styles/shoppingCart.module.css"
import Product from "./product"
import Link from "next/link";








export default function ShoppingCart(){



   const cart = useAppContext(); 
  

function handleCloseCart() {
    cart.closeCart();
}


// funcion que devuelve el total de los precios
function getTotal() {
    const total = cart.items.reduce((acc,item) => acc + item.qty *item.price , 0)
    return total;
}




    return (
        <div className={style.shoppingCart} style={{display: cart.isOpen ? 'block' : 'none' }}>
            <button  className={style.close} onClick={handleCloseCart} >Cerrar</button>



            {/* validamos si el carrito es igual a cero */}

            {cart.items.length === 0 ? <div className={style.empty}>El carrito esta vacio</div> : 
            <>
            <h3>Tus productos</h3>

            <div>
                {cart.items.map((item) =>(
                    <Product key={item.id}  item={item} showAs="ListItem" qty={item.qty} />
                ))}
            </div>

            <div className={style.total}>Total: ${getTotal()}</div>
            

            <div className={style.containerButton}>
                    <Link href='#'>
                        <a className={style.buttonCompra}  >Procesar compra</a>
                    </Link>
            </div>
           
           
           
                
            </>
            }

            

            

        </div>
    )
}