import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Netlify Identity Widget for admin authentication */}
          <Script
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
            strategy="afterInteractive"
          />
        </body>
      </Html>
    );
  }
}
