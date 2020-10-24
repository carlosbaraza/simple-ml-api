import "normalize.css";
import "../styles/globals.css";
import { StylesProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <Component {...pageProps} />
    </StylesProvider>
  );
}

export default MyApp;
