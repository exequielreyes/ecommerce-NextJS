import Layout from "../components/layout";
// import style from "../styles/cartButton.module.css";
import { signIn, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";


export default function Login({session}) {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // const [login, setLogin] = useState("signIn");

  // if (status !== "loading" && status === "authenticated") {
  //   router.push("/");
  // }



  const [show, setShow] = useState(false)

  return (
    <Layout title={"Login"}>


<section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Login</h1>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5'>
                <div className={styles.input_group}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    />
                        <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                </div>

                <div className={styles.input_group}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    />
                         <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>

                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Login
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' className={styles.button_custom} onClick={() => {signIn("google");}}>
                        Sign In with Google <Image src={'/img/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' className={styles.button_custom} onClick={() => {signIn("github");}}>
                        Sign In with Github <Image src={'/img/github.svg'} width={25} height={25}></Image>
                    </button>
                </div>
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                don't have an account yet? <Link href={'/register'}><a className='text-blue-700'>Sign Up</a></Link>
            </p>
        </section>


    </Layout>
  );
}



// <div className={style.container}>
// <button
//   className={style.buttonGitHub}
//   onClick={() => {
//     signIn("github");
//   }}
// >
//   Sing In with GitHub
// </button>
// <button
//   className={style.buttonGoogle}
//   onClick={() => {
//     signIn("google");
//   }}
// >
//   Sing In with Google
// </button>
// </div>


export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }

  return {
    props: {
      session
    }
  }

}