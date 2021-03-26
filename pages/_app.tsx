import { AppProps } from 'next/app';
import 'react-notion-x/src/styles.css';
import '@/styles/main.css';

// import 'katex/dist/katex.min.css';
// import 'prismjs/themes/prism.css';

// * --------------------------------------------------------------------------- style

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} style={{ fontSize: '16px' }} />;
};

export default MyApp;
