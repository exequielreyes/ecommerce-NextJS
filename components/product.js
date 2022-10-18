import Link from "next/link";
import Image from "next/image";
import style from "../styles/product.module.css";
import { convertToPath } from "../lib/utils";
import { FaTrash } from 'react-icons/fa';
import { GrFormView } from 'react-icons/gr'
import { useRouter } from "next/router"
import CartButton from "./cartButton";
import { useAppContext } from "./stateWrapper"




//con item mostramos la informacion que necesitamos
export default function Product({ item, showAs, qty }){

    const router = useRouter()
    const cart = useAppContext();


    function handleRemoveItem() {
        cart.removeItenToCart(item);
    }



  if (showAs === "Page") {
    return (
      


    <div className={style.body}>
      <div className={style.card}>
        <div className={style.imgBox}>
          <div className={style.categoryNueva}>{item.category}</div>
            <Image
                src={item.image}
                alt={item.description}
                width={500}
                height={500}
                
              />
        </div>
        <div className={style.details}>
          <div className={style.titleNuevo}>
              <h3>{item.title}</h3>
          </div>
          <div className={style.descriptionNueva}>
            <h4>Descripcion</h4>
            <p>{item.description}</p>
          </div>
          <div className={style.buy}>
              <div className={style.priceNuevo}>
                  <span>${item.price}</span>
              </div>

              <div className={style.button}>
              <CartButton item={item}  />
              </div>

          </div>
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
          <div>${item.price}</div>

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
        <div className={style.categoryProduct}>{item.category} </div>
      <div className={style.imgCart}>
         {/* <Link href={`/store/${item.id}`} >  */}
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
      <div className={style.buttonCart}>
        <CartButton item={item} />

        <button className={style.button}
        onClick={() =>router.push(`/store/${convertToPath(item.title)}`)}
        >
        <GrFormView className={style.iconView}/>
        </button>
      </div>
    </div>
  );
}
