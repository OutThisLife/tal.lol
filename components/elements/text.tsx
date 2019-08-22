import Box from 'ui-box'

const Text = props => <Box placeSelf="auto" {...props} />

Text.defaultProps = {
  is: 'p',
  fontSize: '1rem',
  margin: 0
}

export default Text
