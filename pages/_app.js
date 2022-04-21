import Layout from "../Components/layout/Layout";

import "../styles/globals.scss";
import TestManu from "../Components/ManuBar/TestManu";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <TestManu />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
