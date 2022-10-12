import Link from "next/link"
// import Image from "next/image"
import Layout from "../components/layout"
import style from "../styles/faq.module.css";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from  'react-icons/ai'
// import { image } from "../public/img/persona.jpg"




 
 {/*TODO: COMPONENTE TRADICIONAL */ }  

export default function FAQ(){ 
return(
   
    <Layout title={"Faq"}>
      <h2 className={style.nosotros}>Nosotros</h2>
    
    <div className={style.body}>
        
        <div className={style.card}>
          <div className={style.content}>
            <span></span>
            <div className={style.img}>
              <img
              
              src="/img/img1.jpg"
              
              className={style.prueba}

              />
            </div>
                <h4>Cortes, Roberto Misael</h4>
                <h6>Software Enginer</h6>
                <p> Lorem ipsum dolor sit amet consectetur </p>
          </div>
          <div className={style.links}>
            <Link href="https://www.instagram.com/exequiel_reyes16/">
              <a> <AiFillGithub/>  </a>
            </Link>
            <Link href="#">
              <a> <AiFillFacebook/>  </a>
            </Link>
            <Link href="#">
              <a> <AiFillInstagram/>  </a>
            </Link>

            
          </div>
        </div>

        <div className={style.card}>
          <div className={style.content}>
            <span></span>
            <div className={style.img}>
              <img
              
              src="/img/persona.jpg"
              
              className={style.prueba}

              />
            </div>
                <h4>Reyes, Jonathan Exequiel</h4>
                <h6>Ingenieria en Sistemas</h6>
                <p> Lorem ipsum dolor sit amet consectetur </p>
          </div>
          <div className={style.links}>
            <Link href="https://www.instagram.com/exequiel_reyes16/">
              <a> <AiFillGithub/>  </a>
            </Link>
            <Link href="#">
              <a> <AiFillFacebook/>  </a>
            </Link>
            <Link href="#">
              <a> <AiFillInstagram/>  </a>
            </Link>

            
          </div>
        </div>


    </div>
   </Layout>
) 

}