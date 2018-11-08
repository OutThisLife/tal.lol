import { Box, Divider, Heading, List, Text } from '@/components/elements'
import Exp from '@/components/exp'
import Links from '@/components/links'
import { DataProps } from '@/lib/data'

export default ({
  links,
  bio,
  highlights = [],
  skills = [],
  experience,
  projects = []
}: DataProps) => (
  <Box
    is="main"
    display="grid"
    gridTemplateColumns="repeat(40, 1fr)"
    paddingY="calc(1.5vmin * 10)"
    maxWidth="80vw"
    margin="auto">
    <Box is="hgroup" gridColumn="6 / -6" textAlign="center">
      <Heading is="h1" fontSize="4rem" paddingBottom={0}>
        Talasan
        <br />
        Nicholson
      </Heading>

      <Links items={links} />

      <Divider />

      <Heading fontSize="0.7em">╮(︶▽︶)╭ </Heading>
      <Text dangerouslySetInnerHTML={{ __html: bio }} />

      <Divider />
    </Box>

    <Box
      is="section"
      gridColumn="9 / -9"
      display="inherit"
      gridTemplateColumns="inherit"
      marginBottom="calc(2.5vmax * 3)">
      <Box gridRow={1} gridColumn="1 / 19">
        <Heading>Brief.</Heading>
        <List items={highlights} />
      </Box>

      <Box gridRow={1} gridColumn="-1 / -21" textAlign="right">
        <Heading>Tech.</Heading>
        <List items={skills} />
      </Box>
    </Box>

    <Box
      is="section"
      gridColumn="10 / -10"
      display="inherit"
      gridTemplateColumns="inherit">
      <Box gridRow={1} gridColumn="1 / 30">
        <Heading>Exp.</Heading>

        {experience.map((exp, i) => (
          <Exp key={`exp-${i}`} {...exp} />
        ))}
      </Box>

      <Box gridRow={1} gridColumn="-1 / -10" textAlign="right">
        <Heading>Collab.</Heading>

        <List items={projects} />
      </Box>
    </Box>
  </Box>
)
