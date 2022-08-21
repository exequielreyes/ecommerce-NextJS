import style from "../styles/cartButton.module.css"
import { useAppContext } from "./stateWrapper"
export default function CartButton({item}) {

const cart = useAppContext();

function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
}

    return(
        <button className={style.button} onClick={handleClick} >Add to Cart</button>
    )
}