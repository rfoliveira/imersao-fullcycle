import Document, {Html, Head, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <meta name="theme-color"/>
                </Head>
                <body>
                    <NextScript />
                </body>
            </Html>
        )
    }
}