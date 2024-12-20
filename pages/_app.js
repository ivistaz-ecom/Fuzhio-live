import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics and GTM Scripts */}
      <Script
        strategy="afterInteractive"
        id="google-code"
        src="https://www.googletagmanager.com/gtag/js?id=G-HGLVN18PC5"
      ></Script>

      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-HGLVN18PC5');
        `}
      </Script>

      <Script id="google-tag-manager-start">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M67QDM5');
        `}
      </Script>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-M67QDM5"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      {/* JSON-LD Schema */}
      <Script id="json-ld-schema" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Fuzhio",
            "url": "https://fuzhio.org/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://fuzhio.org/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>

      {/* Page Component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
