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
    // setLogin("Leo");
    router.push("/");
  }

  return (
    <Layout title={"Login"}>
      <div>
        <button
          className={style.button}
          onClick={() => {
            signIn("github");
          }}
        >
          Sing In with GitHub
        </button>
      </div>
    </Layout>
  );
}
