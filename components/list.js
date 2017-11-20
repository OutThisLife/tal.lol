import styled from 'styled-components'

const List = styled.ul`
margin-left: -20px;

li {
  color: var(--faded);
  list-style-type: lower-roman;
}

li:hover {
  color: var(--secondary);
}

li p {
  color: initial;
  margin: 0;
}
`

export default ({ items, style }) => (
  <List style={style || {}}>
    {items.map(str => <li key={Math.random()} dangerouslySetInnerHTML={{ __html: `<p>${str}</p>` }} />)}
  </List>
)
