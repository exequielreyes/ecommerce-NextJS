import Layout from "../components/layout";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import style from "../styles/profile.module.css";
// import { useState } from "react";

export default function Profile() {
  const { data: session, status } = useSession();
 

  return (
    <Layout title={"Profile"}>
      
      <div className={style.container}>
        <div className={style.image}>
            <h1>imagen</h1>
        </div>
        
        <div className={style.info}>
           <p>Nombre: Bad Bunny</p>
           <p> Email: barbunyopr@gmail.com</p>
        </div>



        </div>
      
    </Layout>
  );
}
