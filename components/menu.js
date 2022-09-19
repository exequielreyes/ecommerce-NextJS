import Link from "next/link";
import { useAppContext } from "./stateWrapper";
import style from "../styles/menu.module.css";

import { signIn, signOut, useSession } from "next-auth/react";
import { userAgent } from "next/server";
import { useEffect, useState } from "react";

export default function Menu() {
  const cart = useAppContext();
  const { data: session, status } = useSession();

  function handleOpenCart() {
    cart.openCart();
  }

  const [sesion, setSesion] = useState("Iniciar Sesion");

  const cambiarSesion = () => {
    if (status !== "loading" && status === "authenticated") {
      setSesion(session.user.name);
    }
  };

  useEffect(() => {
    cambiarSesion();
  }, [status]);

  return (
    <nav className={style.menu}>
      <div>
        <Link href="/">
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
        <a href="#" className={style.link} onClick={handleOpenCart}>
          Cart ({cart.getNumberOfItems()}){" "}
        </a>

        <Link href="/login">
          <a className={style.link}>{sesion}</a>
        </Link>

        {/* <button
          className={style.link}
          onClick={() => {
            signOut();
          }}
        >
          signOut
        </button> */}
      </div>
    </nav>
  );
}
