
import styles from '../styles/registerLogin.module.css';
import Head from 'next/head';
import Link from "next/link";



export default function registerLogin( { children, title }){
    return (
        <div>

        <Head>
        <title>Me-Shop Merch {title ? `| ${title}` : "" } </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      
        


    </Head>

        <div className="flex h-screen bg-blue-400">
            <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className={styles.imgStyle}>
<Link href='/'>
<a>
    <div className={styles.cartoonImg}></div>
</a>
</Link>
                    
                </div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
  
        </div>
        </div>
    )
}