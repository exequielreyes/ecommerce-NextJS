import Layout from "../components/layout";
import style from "../styles/cartButton.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
// import { useState } from "react";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // const [login, setLogin] = useState("signIn");

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }

  return (
    <Layout title={"Login"}>
      <div className={style.container}>
        <button
          className={style.buttonGitHub}
          onClick={() => {
            signIn("github");
          }}
        >
          Sing In with GitHub
        </button>
        <button
          className={style.buttonGoogle}
          onClick={() => {
            signIn("google");
          }}
        >
          Sing In with Google
        </button>
      </div>
    </Layout>
  );
}
