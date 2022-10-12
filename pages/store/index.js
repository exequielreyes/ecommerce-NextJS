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

//TODO: para hacer static generation
   
export async function getStaticProps() {
     const res = await getItems();

     return {
        props: {
            items: res,
        }
     }
}