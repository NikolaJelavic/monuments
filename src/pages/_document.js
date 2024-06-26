import { Html, Head, Main, NextScript } from "next/document";



export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dvwnqprsp/image/upload/v1691239572/Berane/Hanja5_souatc.jpg"
        />
      </Head>
      <body >
        <Main  />
        <NextScript />
      </body>
    </Html>
  );
}
