import BG from '@/components/bg'
import App from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { key } from 'styled-theme'

const theme = {
  base: '#000',
  bg: '#fff',
  primary: '#00f'
}

export default class extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider {...{ theme }}>
        <>
          <Head>
            <title key="title">Talasan Nicholson</title>

            <meta
              key="desc"
              name="desc"
              content="I am a full stack engineer and have been coding since I was ~12."
            />

            <link rel="shortcut icon" href="/static/favicon.ico" />

            <script
              dangerouslySetInnerHTML={{
                __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
              analytics.load("y2cB1SA9QA3iT03sPDb9VYko6yXCq0N9");
              analytics.page();}}();`
              }}
            />
          </Head>

          <BG />
          <GlobalStyles />

          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background: ${key('primary')};
  }

  ::-webkit-scrollbar-track {
    background: ${key('primary')};
  }

  ::-webkit-scrollbar-thumb {
    background: ${key('bg')};
  }

  html {
    color: ${key('base')};
    font-size: 1.45vmax;
    line-height: 1.75;
    font-family: 'Nanum Gothic Coding', sans-serif;

    @media (max-width: 1023px) {
      font-size: 2vmax;
    }
  }

  body {
    background: ${key('bg')};

    &:after {
      z-index: 100;
      content: '';
      pointer-events: none;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 1vmax solid ${key('primary')};
    }
  }

  ::selection {
    color: ${key('bg')};
    background: ${key('primary')};
  }

  ul,
  li {
    display: block;
    margin: 0;
    padding: 0;

    p {
      margin: 0;
    }
  }
`
