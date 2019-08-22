import useTheme from '@/lib/useTheme'
import { rgba } from 'polished'
import Box from 'ui-box'

const Divider = props => (
  <Box
    placeSelf="auto"
    borderBottom={`1px solid ${rgba(useTheme().base, 0.2)}`}
    {...props}
  />
)

Divider.defaultProps = {
  is: 'hr',
  width: '3rem',
  marginY: '4vmax',
  marginX: 'auto',
  borderTop: '0px'
}

export default Divider
