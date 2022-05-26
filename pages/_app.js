import { useEffect } from "react";
import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; //styles of nprogress

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // import bootstrap js in client
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.min') : null
  }, []);
  
  return <Component {...pageProps} />
}

export default MyApp;
