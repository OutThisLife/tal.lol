import useTheme from '@/lib/useTheme'
import { rgba } from 'polished'
import Box from 'ui-box'

import { Text } from '.'

export default ({ items = [], ...props }) => {
  const color = rgba(useTheme().base, 0.5)

  return (
    <Box is="ul" placeSelf="auto" {...props}>
      {items.map((str, i) => (
        <Text
          is="li"
          key={`list-${i}`}
          listStyleType="lower-roman"
          {...{ color }}>
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
  )
}
