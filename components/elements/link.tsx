import useTheme from '@/lib/useTheme'
import { invert } from 'polished'
import styled from 'styled-components'
import { key } from 'styled-theme'
import { withProp } from 'styled-tools'
import Box from 'ui-box'

interface LinkProps {
  href: string
  target?: string
  rel?: string
}

export const Link = (props: LinkProps) => (
  <Box color={useTheme().primary} placeSelf="auto" {...props} />
)

Link.defaultProps = {
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
}

export default styled(Link)`
  &:hover {
    color: ${key('bg')};
    background: ${key('primary')};

    &:focus {
      background: ${withProp('theme.primary', invert)};
    }
  }
`
