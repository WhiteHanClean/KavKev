import Layout from "../Layout/Layout";
import "../styles/global.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
  );
}
