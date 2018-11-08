import data from '@/lib/data'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, css, ThemeProvider } from 'styled-components'

export default class extends App {
  public render() {
    const { Component } = this.props

    return (
      <Container>
        <ThemeProvider
          theme={{
            base: '#111',
            primary: 'blue',
            secondary: '#EC0006',
            border: 'rgba(0, 0, 0, .15)',
            faded: 'rgba(0, 0, 0, .4)',
            bg: '#FFF'
          }}>
          <>
            <Head>
              <title>Talasan Nicholson | Coding since I was 12</title>
            </Head>

            <Component {...data} />
            <GlobalStyles />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${({ theme }: any) => css`
    html {
      color: ${theme.base};
      font-size: 1.45vmax;
      line-height: 1.75;
      font-family: 'Nanum Gothic Coding', sans-serif;

      @media (max-width: 1023px) {
        font-size: 2vmax;
      }
    }

    body {
      background: ${theme.bg};

      &:after {
        z-index: 100;
        content: '';
        pointer-events: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1.5vw solid ${theme.base};
      }
    }

    ::selection {
      color: ${theme.bg};
      background: ${theme.primary};
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
  `}
`
