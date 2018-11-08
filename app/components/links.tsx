import { DataProps } from '@/lib/data'
import { compose, setDisplayName } from 'recompose'
import styled from 'styled-components'

import { Box, Link } from './elements'

interface Props {
  items: DataProps['links']
}

export default compose<Props, Props>(setDisplayName('links'))(({ items }) => (
  <Links>
    {Object.entries(items).map(([label, link]) => (
      <span key={`link-${label}`}>
        <Link href={link}>{label}</Link>
      </span>
    ))}
  </Links>
))

const Links = styled(props => <Box is="nav" {...props} />)`
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
