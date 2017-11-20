import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import styles from './global.scss'

injectGlobal`${styles}`

export default class CustomDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html lang='en-US'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='robots' content='index' />
          <meta name='canonical' content='http://www.talasan.co' />

          <title>Talasan Nicholson | Sr. Full Stack Engineer</title>

          <link rel='shortcut icon' href='/static/favicon.ico' />
          {styleTags}
        </Head>

        <body>
          {main}

          <NextScript />

          <script dangerouslySetInnerHTML={{ __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
              analytics.load("y2cB1SA9QA3iT03sPDb9VYko6yXCq0N9");
              analytics.page();}}();`
          }} />
        </body>
      </html>
    )
  }
}
