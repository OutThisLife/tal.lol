import { createGlobalStyle } from 'styled-components'
import { breakpoints, palettes } from './defines'

export default createGlobalStyle`
  :root {
    --vsq: calc(0.5vw + 0.5vh);
    --cell: calc((var(--vsq) * 50) / 40);
    --columns: 40;
    --max-width: 1600;
    --min-font-size: 18;
    --max-font-size: 20;

    @media (max-width: ${breakpoints.tablet}px) {
      --font-scale: 10;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background: ${palettes.primary};
  }

  ::-webkit-scrollbar-track {
    background: ${palettes.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${palettes.bg};
  }
  
  html {
    font-family: 'Nanum Gothic Coding', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 2;
    font-size: clamp(1.125rem, var(--vsq) * 2, 1.25rem);
    scroll-behavior: smooth;
  }

  body {
    color: ${palettes.fg};
    background: ${palettes.bg};

    &:after {
      z-index: 100;
      content: '';
      pointer-events: none;
      position: fixed;
      inset: 0;
      border: 1vmax solid ${palettes.primary};
    }
  }

  ::selection {
    color: ${palettes.bg};
    background: ${palettes.primary};
  }

  ul,
  li {
    display: block;

    p {
      margin: 0;
    }
  }

  a {
    color: ${palettes.primary};
    text-decoration: none;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2)) center calc(100% + 0px) / 100% 1px no-repeat;

    &:hover {
      color: ${palettes.bg};
      background: ${palettes.primary};

      &:active {
        filter: invert(1)
      }
    }
  }
`
