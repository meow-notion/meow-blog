import { AppProps } from 'next/app';
import '../styles/globals.css';
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism.css';
import 'react-notion-x/src/styles.css';

// * --------------------------------------------------------------------------- style

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
