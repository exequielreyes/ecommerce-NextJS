import Layout from "../components/registerLogin";
import { signIn, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useFormik } from 'formik';
import login_validate from '../lib/validate';


export default function Login({session}) {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // const [login, setLogin] = useState("signIn");

  // if (status !== "loading" && status === "authenticated") {
  //   router.push("/");
  // }
  
  const [show, setShow] = useState(false)
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
        validate : login_validate,
    onSubmit
})

async function onSubmit(values){
  const status = await signIn('credentials', {
    redirect: false,
    email: values.email,
    password: values.password,
    callbackUrl: "/"
})

if(status.ok) router.push(status.url)

}

  return (
    <Layout title={"Login"}>


<section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Iniciar Sesión</h1>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    {...formik.getFieldProps('email')}
                    />
                        <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                </div>
                                {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}


                <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='Contraseña'
                    className={styles.input_text}
                    {...formik.getFieldProps('password')}
                    />
                         <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>

                {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}

                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Iniciar sesión
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' className={styles.button_custom} onClick={() => {signIn("google");}}>
                    Iniciar sesión con Google <Image src={'/img/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' className={styles.button_custom} onClick={() => {signIn("github");}}>
                        Iniciar sesión con Github <Image src={'/img/github.svg'} width={25} height={25}></Image>
                    </button>
                </div>
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                Todavía no tienes cuenta? <Link href={'/register'}><a className='text-blue-700'>Registrarse</a></Link>
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