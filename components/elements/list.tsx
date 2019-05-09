import { rgba } from 'polished'
import { compose, setDisplayName } from 'recompose'
import { withTheme } from 'styled-components'
import Box from 'ui-box'

import { T, Text, U } from '.'

interface Props extends T {
  items: { [key: string]: any }
}

export default compose<Props, U>(
  setDisplayName('list'),
  withTheme
)(({ theme, items, ...props }) => (
  <Box is="ul" {...props}>
    {items.map((str, i) => (
      <Text
        is="li"
        key={`list-${i}`}
        color={rgba(theme.base, 0.5)}
        listStyleType="lower-roman">
        <Text
          display="inline-block"
          color="initial"
          textTransform="lowercase"
          fontSize="0.8rem">
          {str}
        </Text>
      </Text>
    ))}
  </Box>
))
