import styles from '../styles/Home.module.css'
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



export default function Footer() {
    return(
        <footer className="footer">
      
        <div className="footerLeft">
        Copyright © 2022 ME-Shop S.R.L. - Todos los derechos reservados. La Rioja, Argentina
        </div>
        <div className="footerIcon">
        <FaTwitter />
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        </div>
      
    </footer>
    )
}


