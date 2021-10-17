import Document, { Html, Head, Main, NextScript } from 'next/document'

class DOM extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Title */}
          <title>Home - literaiiy.me</title>
          {/* Stylesheets */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Satisfy&family=Norican" />
          <link rel="canonical" href="https://literaiiy.me" />
          {/* Meta tags */}
          <meta name="title" content="Home - literaiiy.me"/>
          <meta name="description" content="Hello! I am literaiiy (styled lowercase), a smartphone, web development & design, computer, and many-other-things enthusiast residing in the Bay Area."/>
          <meta name="keywords" content="literaiiy, toolbox, tiramisu, dah.li/a"/>
          <meta name="robots" content="index, follow"/>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English"/>
          <meta name="author" content="literaiiy"/>
            {/* OpenGraph */}
            <meta property="og:title" content="Home - literaiiy.me" />
            <meta property="og:site_name" content="literaiiy.me" />
            <meta property="og:url" content="https://literaiiy.me" />
            <meta property="og:description" content="Hello! I am literaiiy (styled lowercase), a smartphone, web development & design, computer, and many-other-things enthusiast residing in the Bay Area." />
            <meta property="og:type" content="profile" />
            <meta property="og:image" content="https://user-images.githubusercontent.com/64048778/136896416-258d2b8d-50b8-4983-8888-3fe2e4c1453f.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Home - literaiiy.me" />
            <meta name="twitter:description" content="Hello! I am literaiiy (styled lowercase), a smartphone, web development & design, computer, and many-other-things enthusiast residing in the Bay Area."/ >
            <meta name="twitter:image" content="https://user-images.githubusercontent.com/64048778/136896416-258d2b8d-50b8-4983-8888-3fe2e4c1453f.png"/>
          {/* Scripts & Libraries */}
          <script async src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js"></script>
          <script async src="/js/curDot.js"></script>
          <script async src="/js/js.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DOM;