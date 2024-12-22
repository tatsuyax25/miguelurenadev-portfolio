import { useEffect } from "react";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-CQ8CKJ4TK8";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-CQ8CKJ4TK8"); // Replace with your actual Measurement ID
    };

    return () => {
      // Cleanup by removing the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
