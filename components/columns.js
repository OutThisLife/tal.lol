import styled from 'styled-components'

const Columns = styled.div`
@media (min-width: 767px) {
  display: flex;
  align-items: flex-start;
  width: calc(100% + 200px);
  margin-left: -100px;

  div {
    width: 50%;
    padding: 0 15px;
  }
}
`

export default ({ children }) => <Columns>{children}</Columns>
