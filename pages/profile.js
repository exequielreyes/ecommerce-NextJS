import Layout from "../components/layout";
import { signIn, useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import style from "../styles/profile.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Profile() {
  
  const { data: session, status } = useSession();
   const router = useRouter();
  const [name, setName] = useState("Nombre");
  const [image, setImage] = useState();
  const [email, setEmail] = useState("Email");



  const cambiarSesion = () => {
    if (status !== "loading" && status === "authenticated") {
      setName(session.user.name);
      setImage(session.user.image);
      setEmail(session.user.email);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    cambiarSesion();
  }, [status]);


  return (
    <Layout title={"Profile"}>
      
      <div className={style.container}>
        <div className={style.image}>
        <Image 
                        src={image} 
                        alt="imagen-user" 
                        width={300} 
                        height={300}  
                    />
        </div>
        
        <div className={style.info}>
           <p>Nombre: {name}</p>
           <p>Email: {email}</p>
        </div>



        </div>
      
    </Layout>
  );
}
