import useTheme from '@/lib/useTheme'
import { rgba } from 'polished'
import Box from 'ui-box'

const Time = props => <Box color={rgba(useTheme().base, 0.5)} {...props} />

Time.defaultProps = {
  is: 'time',
  fontSize: 'inherit',
  margin: 0
}

export default Time
