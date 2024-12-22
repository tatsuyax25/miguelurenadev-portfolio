import { useEffect } from "react";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

    if (window?.gtag && googleAnalyticsId) {
      window.gtag("config", googleAnalyticsId, {
        page_path: window.location.pathname,
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

