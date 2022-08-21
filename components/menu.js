import Link from "next/link";
import { useAppContext } from "./stateWrapper"; 
import style from '../styles/menu.module.css'

export default function Menu() {

    const cart = useAppContext();

    function handleOpenCart(){
        cart.openCart();
    }

    return(
        <nav className={style.menu}>
            <div>
            <Link href="/" >
                <a className={style.link}>Home</a>
            </Link>

            <Link href="/store">
                <a className={style.link}>Store</a>
            </Link>

            <Link href="/faq">
                <a className={style.link}>FAQ</a>
            </Link>
            </div>

            <div> 
                <a href="#" className={style.link}  onClick={handleOpenCart}> 
                
                Cart ({cart.getNumberOfItems()}) </a>
            </div>



        </nav>
    )
}