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
      {/* <div className={styles.banner}>

        <div className={styles.bannerBackground}>  
        
        <div className={styles.bannerInfo}>
          <h2>Shop the Summer 2022 Collection</h2>
          <p>
          Level up your comfort this season with our new Winter Collection
                — all new joggers, beanies, drinkware, and for the first time
                ever, Octocookie cutters!
          </p>
        </div>
        
        </div>
      </div> */}

    <Herosection />

      <h3>Latest Products</h3>
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
