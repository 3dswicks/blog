// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CommonScript from '@/components/CommonScript'
import Loading from '@/components/Loading'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
            <Html lang={BLOG.LANG}>
                <Head>
                    <meta name="google-site-verification" content="2sbPfUD5--VYunuiWLSJ8Mfcx7bTfqbXgDRTcW5QH5U" />
                    <link rel='icon' href='/favicon.ico' />
                    <CommonScript />
                </Head>

                <body className={`${BLOG.FONT_STYLE} font-light bg-day dark:bg-night`}>
                    <Main />
                    <NextScript />
                </body>
                <Loading />
            </Html>
    )
  }
}

export default MyDocument
