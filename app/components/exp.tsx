import { DataProps } from '@/lib/data'
import { compose, setDisplayName } from 'recompose'

import { Box, Heading, Link, List, Text, Time } from './elements'

type Props = DataProps['experience'][number]

export default compose<Props, Props>(setDisplayName('experience'))(
  ({ url, company, position, date, responsibilities = [] }) => (
    <Box is="article">
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
)
