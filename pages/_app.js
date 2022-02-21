import Layout from "../Layout/Layout";
import "../styles/global.scss";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import CartContextProvider from "../context/CartContext";
import { PersistGate } from "redux-persist/integration/react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <CartContextProvider>
            <Component {...pageProps} />
          </CartContextProvider>
        </Layout>
      </PersistGate>
    </Provider>
  );
}
