import { invert } from 'polished'
import { compose, defaultProps, setDisplayName } from 'recompose'
import styled, { css, withTheme } from 'styled-components'
import Box from 'ui-box'

import { T } from '.'

interface LinkProps extends T {
  href: string
  target?: string
  rel?: string
}

export const Link = compose<LinkProps, LinkProps>(
  setDisplayName('link'),
  withTheme,
  defaultProps({
    is: 'a',
    target: '_blank',
    rel: 'noopener noreferrer',
    display: 'inline-block',
    fontSize: 'inherit',
    textDecoration: 'none',
    lineHeight: 1,
    paddingY: 2,
    background: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.2)
      )
      center calc(100% + 0px) / 100% 1px no-repeat;`
  })
)(({ theme, ...props }) => <Box color={theme.primary} {...props} />)

export default styled(Link)`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.bg};
      background: ${theme.primary};

      &:focus {
        background: ${invert(theme.primary)};
      }
    }
  `}
`
