import Layout from "../Components/layout/Layout";
import "../styles/globals.scss";
import TestManu from "../Components/ManuBar/TestManu";

import { store } from "../Redux/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
