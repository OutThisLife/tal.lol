import Box from 'ui-box'

const Heading = props => <Box placeSelf="auto" {...props} />

Heading.defaultProps = {
  is: 'h2',
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: 1,
  margin: 0,
  paddingBottom: '0.75em'
}

export default Heading
