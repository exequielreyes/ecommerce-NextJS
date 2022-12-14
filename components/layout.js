import Head from 'next/head';
import style from '../styles/layout.module.css';
import Menu from './menu';
import ShoppingCart from './shoppingCart';
import Footer from '../components/Footer'


//desestructuramos porque tiene 2 props
export default function Layout({children, title}) {
    return(
       <div>
            <Head>
                {/* utilizamos un operador ternario */}
                <title>Me-Shop Merch {title ? `| ${title}` : "" } </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

{/* este menu se va  aver en todas las secciones */}
            <Menu />



            <div className={style.container}>{children}</div>
            <ShoppingCart />
            <Footer /> 
            
       </div> 
    )
}