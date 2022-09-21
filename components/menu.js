import Link from "next/link";
import { useAppContext } from "./stateWrapper"; 
import style from '../styles/menu.module.css';
import Search from '../components/search';
import Image from "next/image";
import Logo from "../public/img/ME-shop-logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export default function Menu() {

    const cart = useAppContext();

    function handleOpenCart(){
        cart.openCart();
    }

    return(
        <nav className={style.menu}>
            
                <Image src={Logo} width={120} height={50} className={style.image} />
            
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
                <Search />
            </div>

            <div> 
                <a href="#" className={style.link}  onClick={handleOpenCart}> 
                <FontAwesomeIcon icon={faShoppingCart} className={style.cart}   /> 
                ({cart.getNumberOfItems()}) </a>
                
            </div>



        </nav>
    )
}