import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps, router }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/fav.png" />
        <title>Exergi</title>
      </Head>
      <Header page={router.route} />
      <motion.div
        key={router.route}
        initial="start"
        animate="visible"
        variants={{
          start: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer />
    </React.Fragment>
  );
}
export default MyApp;
