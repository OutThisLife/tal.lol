import { Box, Heading, Link, List, Text, Time } from './elements'

export default ({
  url = 'javascript:;',
  company,
  position,
  date,
  responsibilities = []
}) => (
  <Box placeSelf="auto" is="article">
    <Heading is="h3" paddingY="1em">
      <Link href={url}>{company}</Link>

      <Text is="span" fontSize="1em" textTransform="lowercase">
        {' '}
        {position}, <Time>{date}</Time>
      </Text>
    </Heading>

    {responsibilities.length ? <List items={responsibilities} /> : null}
  </Box>
)
