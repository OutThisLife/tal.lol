import { compose, defaultProps, setDisplayName } from 'recompose'
import Box from 'ui-box'

import { T, U } from '.'

export default compose<T, U>(
  setDisplayName('text'),
  defaultProps({
    is: 'p',
    fontSize: '1rem',
    margin: 0
  })
)(props => <Box {...props} />)
