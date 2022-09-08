import StateWrapper from "../components/stateWrapper";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <StateWrapper>
        <Component {...pageProps} />
      </StateWrapper>
    </SessionProvider>
  );
}

export default MyApp;
