import Layout from "../../components/layout";
import { getItems } from "../../services/itemService";
import Image from "next/image";
import Product from "../../components/product";
import styleItems from "../../styles/product.module.css"



export default function Index({items}) {
    return(
       <Layout title={"Store"} >
        <h1 className={styleItems.productos}>Productos</h1>
        <div className={styleItems.items} >

        {

            //validamos si items existe e imprimimos los productos
            items && items.map((item) =>(
            // <div key={item.id}>
            //     <Image src={item.image} width="200" height={200} />
            // {item.title}</div>
             <Product key={item.id} item={item}  showAs="default" />
        ))}
        </div>
        
       </Layout>
    )
}

//TODO: para poder mostrar nuestros productos, esta funcion
//para hacer static generation
export async function getStaticProps() {
     const res = await getItems(); //llamamos la funcion de items para tener nuestro arreglo de objetos

     return {
        props: {
            items: res,
        }
     }
}