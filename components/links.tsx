import styled from 'styled-components'

import { Box, Link } from './elements'

export default ({ items = {} }) => (
  <Links>
    {Object.entries(items).map(([label, link]) => (
      <span key={`link-${label}`}>
        <Link href={link}>{label}</Link>
      </span>
    ))}
  </Links>
)

const Links = styled(props => <Box is="nav" placeSelf="auto" {...props} />)`
  span {
    font-weight: 600;

    &:not(:last-of-type):after {
      content: ', ';
    }
  }

  &:before {
    content: ' { ';
  }

  &:after {
    content: ' } ';
  }
`
