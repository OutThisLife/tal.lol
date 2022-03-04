import styled from 'styled-components'
import { prop } from 'styled-tools'

export default styled.main`
  --gap-ratio: 12;

  display: grid;
  grid-row-gap: calc(var(--gap-ratio) * var(--vsq));
  grid-template-columns: repeat(40, 1fr);
  margin: auto;
  max-width: calc(100 * var(--vsq));
  padding-block: calc(15 * var(--vsq));
  place-content: center;
  place-items: center;
  text-align: center;

  @media (min-width: ${prop('theme.breakpoints.tablet')}px) {
    --gap-ratio: 5;
  }

  > {
    * {
      grid-column: 6 / -6;
      width: 100%;

      @media (min-width: ${prop('theme.breakpoints.tablet')}px) {
        grid-column: 3 / -3;
      }
    }

    hgroup {
      @media (min-width: ${prop('theme.breakpoints.tablet')}px) {
        grid-column: 6 / -6;
      }

      h1 {
        font-size: 4rem;
        line-height: 1;
        margin: 0 0 1rem;
      }

      h2 {
        font-size: 0.7rem;
      }

      nav {
        &:before {
          content: '{ ';
        }

        &:after {
          content: ' }';
        }

        > span {
          font-weight: 700;

          &:not(:last-child):after {
            content: ', ';
          }
        }
      }

      hr {
        border: unset;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin: 4vmax auto;
        max-width: 3rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    section {
      display: inherit;
      grid-row-gap: inherit;
      grid-template-columns: inherit;
      place-items: stretch;
      text-align: left;

      @media (min-width: ${prop('theme.breakpoints.tablet')}px) {
        grid-column: 9 / -9;
      }

      > div {
        grid-column: 1 / -1;

        @media (min-width: ${prop('theme.breakpoints.tablet')}px) {
          &:not(:only-child) {
            &:first-child {
              grid-column: 1 / 19;
            }

            &:last-child {
              grid-column: -19 / -1;
              text-align: right;
            }
          }
        }

        > {
          h2 {
            font-size: 1rem;
            margin-bottom: auto;
          }

          ul li {
            font-size: 0.9rem;
            text-transform: lowercase;

            a {
              font-weight: 600;
            }

            time {
              opacity: 0.5;
            }
          }
        }

        &.exp li span {
          margin-left: 1ch;

          strong:not(:only-child):after {
            content: ', ';
            font-weight: 400;
          }
        }
      }
    }
  }
`
