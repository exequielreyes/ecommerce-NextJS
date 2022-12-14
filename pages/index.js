import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout from '../components/layout'
import { getLatestItems } from '../services/itemService'
import Product from '../components/product'
import styleProduct from "../styles/product.module.css"
import Herosection from "./herosection";



export default function Home({ items }) {
  return (
<>
     

    <Layout> 
    <Herosection />

      <div className={styleProduct.contenedorNombre}>
      <h3 className={styleProduct.name}>Tendencias</h3>
        <Link href="/store" >
          <a className={styleProduct.nameLink}>Ver todos</a>
        </Link>
      </div>
      
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
            

    </>    
  )
}

export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}
