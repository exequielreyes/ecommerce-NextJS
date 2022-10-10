import Layout from "../components/layout";
import { getSession, signIn, useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import style from "../styles/profile.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Profile({session}) {
  
  // const { data: session, status } = useSession();
  //  const router = useRouter();
  // const [name, setName] = useState("Nombre");
  // const [image, setImage] = useState();
  // const [email, setEmail] = useState("Email");

console.log(session)

  // const cambiarSesion = () => {
  //   if (status !== "loading" && status === "authenticated") {
  //     setName(session.user.name);
  //     setImage(session.user.image);
  //     setEmail(session.user.email);
  //   } 
  // };

  // useEffect(() => {
  //   cambiarSesion();
  // }, [status]);


  return (
    <Layout title={"Profile"}>
      
      <div className={style.container}>
        <div className={style.image}>
        <Image 
                        src={session.user.image} 
                        alt="imagen-user" 
                        width={300} 
                        height={300}  
                    />
        </div>
        
        <div className={style.info}>
           <p>Nombre: {session.user.name}</p>
           <p>Email: {session.user.email}</p>
        </div>



        </div>
      
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return {
    props: {
      session
    }
  }

}