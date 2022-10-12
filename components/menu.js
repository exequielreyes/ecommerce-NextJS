import Link from "next/link";
import { useAppContext } from "./stateWrapper";
// import style from '../styles/menu.module.css';
import Search from "../components/search";
import Image from "next/image";
import Logo from "../public/img/ME-shop-logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";




import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Menu() {
  const cart = useAppContext();
  const { data: session, status } = useSession();

  function handleOpenCart() {
    cart.openCart();
  }

  const [sesion, setSesion] = useState("Iniciar Sesion");
  const [logot, setLogot] = useState("hidden");
  const [login, setLogin] = useState("/login");


  console.log(status);

  const cambiarSesion = () => {
    if (status !== "loading" && status === "authenticated") {
      if (!session.user.name){
        setSesion(session.user.email);
      } else {
        setSesion(session.user.name);

      }

      setLogot("title");
      setLogin("/profile");
    } 
  };

  useEffect(() => {
    cambiarSesion();
  }, [status]);

  return (
    <nav className="navigation">
      <Link href="/">
        <a className="brand-name">
          <Image src={Logo} width={120} height={50} />
        </a>
      </Link>

      <button className="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="navigation-menu">
        <ul>
          <li className="active">
            <Link href="/">
              <a className="title">Inicio</a>
            </Link>
          </li>

          <li>
            <Link href="/store">
              <a className="title">Todos los productos</a>
            </Link>
          </li>

          <li>
            <Link href="/faq">
              <a className="title">Nosotros</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a className="title">Contacto</a>
            </Link>
          </li>

         
        </ul>
      </div>

      <div className="search">
        <Search />
      </div>

      <div className="cart">
        <div className="logo-cart">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </div>
        <div className="number-cart">
          <a href="#" onClick={handleOpenCart}>
            ({cart.getNumberOfItems()}){" "}
          </a>
        </div>
      </div>

      <div>
        {/* <a href="#" className={style.link} onClick={handleOpenCart}>
            Cart ({cart.getNumberOfItems()}){" "}
            </a> */}
      
        <Link href={login}>
          <a className="title">{sesion}</a>
        </Link>
        
        <button
          className={logot}
          onClick={() => {
            signOut();
          }}
        >
          Cerrar Sesion
        </button>
      </div>
    </nav>
  );
}
