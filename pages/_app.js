import { useState } from "react";
import '../styles/globals.css';
// import '../public/quill.snow.css';
// import '../node_modules/quill/dist/quill.snow.css';

function MyApp({ Component, pageProps }) {
  const [ isLoaded, setIsLoaded ] = useState(false);

  return <Component {...pageProps} />
}

export default MyApp
