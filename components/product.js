import Link from "next/link";
import Image from "next/image";
import style from "../styles/product.module.css";
import { convertToPath } from "../lib/utils";
import { FaTrash } from 'react-icons/fa';




import CartButton from "./cartButton";

import { useAppContext } from "./stateWrapper"




export default function Product({ item, showAs, qty}){

    const cart = useAppContext();


    function handleRemoveItem() {
        cart.removeItenToCart(item);
    }



  if (showAs === "Page") {
    return (
      // <div>
      //     <h2>{item.title}</h2>
      // </div>
      <div className={style.page}>
        <div className={style.image}>
          <Image
            src={item.image}
            alt={item.description}
            width={500}
            height={500}
          />
        </div>
        <div className={style.info}>
          <div>
            <h2>{item.title}</h2>
          </div>

          <div className={style.price}>${item.price}</div>
          <div>${item.description}</div>
          <div>
            <CartButton item={item} />
          </div>
        </div>
      </div>
    );
  }

  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div className={style.imgItem}>
          <Image
            src={item.image}
            alt={item.description}
            width="100px"
            height="100px"
          />
        </div>
        <div>
          <h4>
            <div>{item.title}</div>
          </h4>
          <div>{item.price}</div>

          {qty === 0 ? "" : <div>{qty} Unidad </div>}
          {qty === 0 ? "" : <div>Subtotal: ${qty * item.price}</div>}

          <button 
          type="button" 
          className={style.eliminar} 
          onClick={handleRemoveItem}
          >
            <FaTrash className={style.iconCart}/>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={style.item}>
      <div className={style.imgCart}>
        {/* <Link href={`/store/${item.id}`} > */}
        <Link href={`/store/${convertToPath(item.title)}`}>
          <a>
            <Image
              src={item.image}
              alt={item.description}
              width={150}
              height={150}
              
            />
          </a>
        </Link>
      </div>

      <div>
        <h3>
          <a>{item.title}</a>
        </h3>
      </div>

      <div className={style.priceCart}>${item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
}
