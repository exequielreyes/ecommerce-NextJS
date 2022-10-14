import style from "../styles/cartButton.module.css"
import { useAppContext } from "./stateWrapper"
import { FaCartArrowDown } from "react-icons/fa";
export default function CartButton({item}) {

const cart = useAppContext();

//llamamos el metododo de item
function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
}




    return(
        <div className={style.buttonCart}>
        <button className={style.button} onClick={handleClick}>
        <FaCartArrowDown className="iconArrow" />
        </button>

        </div>
    )
}