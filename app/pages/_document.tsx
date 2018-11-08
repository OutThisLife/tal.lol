import favicon from '@/static/favicon.ico'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { extractStyles } from 'ui-box'

export default class extends Document<{ styleTags: React.ReactNode[] }> {
  public static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()
    const { styles } = extractStyles()

    styleTags.push(
      <style
        key="box-styles"
        dangerouslySetInnerHTML={{ __html: styles.trim() }}
      />
    )

    return { ...page, styleTags }
  }

  public render() {
    const { styleTags } = this.props

    return (
      <html lang="en-US">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index" />
          <meta name="canonical" content="//www.talasan.co" />

          <link rel="shortcut icon" href={favicon} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding|Nanum+Myeongjo"
          />

          {styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />

          <script
            dangerouslySetInnerHTML={{
              __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
              analytics.load("y2cB1SA9QA3iT03sPDb9VYko6yXCq0N9");
              analytics.page();}}();`
            }}
          />
        </body>
      </html>
    )
  }
}
