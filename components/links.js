import styled from 'styled-components'

const Links = styled.h5`
cursor: default;
font-weight: 400;
font-size: .8rem;
margin: 0;

span:after {
  content: ',';
}

span:not(:first-child):before {
  content: ' ';
}
`

export default ({ links }) => (
  <Links>
    [{Object.keys(links).map(l => {
      return (
        <span key={Math.random()}>
          <a
            href={links[l]}
            target='_blank'
            rel='noopener noreferrer'
            dangerouslySetInnerHTML={{ __html: l }}
          />
        </span>
      )
    })}]
  </Links>
)
