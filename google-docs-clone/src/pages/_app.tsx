import "@material-tailwind/react/tailwind.css";
import "@style/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";

// // @material-tailwind/react
// import { ThemeProvider } from "@material-tailwind/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    // <ThemeProvider>
    <SessionProvider session={session}>
      <Head>
        <title>Google Docs Clone</title>
      </Head>
      {/*@ts-ignore*/}
      <Component {...pageProps} />
    </SessionProvider>
    // </ThemeProvider>
  );
};

export default App;
