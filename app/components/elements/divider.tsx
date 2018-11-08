import { compose, defaultProps, setDisplayName } from 'recompose'
import { withTheme } from 'styled-components'
import Box from 'ui-box'

import { T, U } from '.'

export default compose<T, U>(
  setDisplayName('divider'),
  withTheme,
  defaultProps({
    is: 'hr',
    width: '3rem',
    marginY: '4vmax',
    marginX: 'auto',
    borderTop: '0px'
  })
)(({ theme, ...props }) => (
  <Box borderBottom={`1px solid ${theme.border}`} {...props} />
))
