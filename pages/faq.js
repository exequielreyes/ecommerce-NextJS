import Link from "next/link"
// import Image from "next/image"
import Layout from "../components/layout"
import style from "../styles/faq.module.css";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from  'react-icons/ai'
// import { image } from "../public/img/persona.jpg"




 
 {/*TODO: COMPONENTE TRADICIONAL */ }  

export default function FAQ(){ 
return(
   
    <Layout title={"Nosotros"}>
    
    
    <div className={style.body}>
        
        <div className={style.card}>
          <div className={style.content}>
            <span></span>
            <div className={style.img}>
              <img
              
              src="/img/persona1.jpeg"
              
              className={style.prueba}

              />
            </div>
                <h4>Cortes, Roberto Misael</h4>
                <h6>Estudiante de Ingenieria en Sistemas</h6>
                <p> Seminario de actualizacion II </p>
          </div>
          <div className={style.links}>
            <Link href="https://github.com/Misael-Corts">
              <a> <AiFillGithub/>  </a>
            </Link>
            <Link href="https://www.facebook.com/misael.cortes.39/">
              <a> <AiFillFacebook/>  </a>
            </Link>
            <Link href="https://www.instagram.com/misaelcortes32/?hl=es-la">
              <a> <AiFillInstagram/>  </a>
            </Link>

            
          </div>
        </div>

        <div className={style.card}>
          <div className={style.content}>
            <span></span>
            <div className={style.img}>
              <img
              
              src="/img/persona2.jpeg"
              
              className={style.prueba}

              />
            </div>
                <h4>Reyes, Jonathan Exequiel</h4>
                <h6>Estudiante de Ingenieria en Sistemas</h6>
                <p> Seminario de actualizacion II </p>
          </div>
          <div className={style.links}>
            <Link href="https://github.com/exequielreyes">
              <a> <AiFillGithub/>  </a>
            </Link>
            <Link href="https://www.facebook.com/exequiel.lasmalvinas.1/">
              <a> <AiFillFacebook/>  </a>
            </Link>
            <Link href="https://www.instagram.com/exequiel_reyes16/">
              <a> <AiFillInstagram/>  </a>
            </Link>

            
          </div>
        </div>


    </div>
   </Layout>
) 

}