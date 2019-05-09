import { compose, defaultProps, setDisplayName } from 'recompose'
import Box from 'ui-box'

import { T, U } from '.'

export default compose<T, U>(
  setDisplayName('heading'),
  defaultProps({
    is: 'h2',
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: 1,
    margin: 0,
    paddingBottom: '0.75em'
  })
)(props => <Box {...props} />)
