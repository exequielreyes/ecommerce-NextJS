import style from "../styles/cartButton.module.css"
import { useAppContext } from "./stateWrapper"
export default function CartButton({item}) {

const cart = useAppContext();

function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
}




    return(
        <div className={style.buttonCart}>
        <button className={style.button} onClick={handleClick} > Agregar al Carrito</button>

        </div>
    )
}