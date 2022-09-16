import Link from "next/link";
import { useAppContext } from "./stateWrapper";
import style from "../styles/menu.module.css";

import { signIn, useSession } from "next-auth/react";
import { userAgent } from "next/server";

export default function Menu() {
  const cart = useAppContext();

  function handleOpenCart() {
    cart.openCart();
  }

  const { data: session, status } = useSession();

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
          <a className={style.link}>Sign In</a>
        </Link>
      </div>
    </nav>
  );
}
