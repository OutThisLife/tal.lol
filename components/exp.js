import styled from 'styled-components'

const Exp = styled.article`
&:not(:last-child) {
  margin-bottom: 30px;
}

h3:only-child {
  margin-bottom: -20px;
}

h3 time {
  color: var(--faded);
  font-weight: 400;
}
`

export default ({ url, company, position, responsibilities }) => (
  <Exp>
    <h3>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        dangerouslySetInnerHTML={{ __html: company }}
      />
      &nbsp;
      <span dangerouslySetInnerHTML={{ __html: position }} />
    </h3>

    <ul>
      {(responsibilities || []).map(str => {
        return (
          <li key={Math.random()}>
            <p dangerouslySetInnerHTML={{ __html: str }} />
          </li>
        )
      })}
    </ul>
  </Exp>
)
