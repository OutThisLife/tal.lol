import { PureComponent } from 'react'
import styled from 'styled-components'
import styles from './styles.scss'
import Columns from '../components/columns'
import Links from '../components/links'
import List from '../components/list'
import Exp from '../components/exp'

const Main = styled.main`${styles}`

export default class Index extends PureComponent {
  static async getInitialProps () {
    return require('../data').default
  }

  render () {
    return (
      <Main>
        <hgroup>
          <h1>Talasan<br />Nicholson</h1>
          <Links {...this.props} />
        </hgroup>

        <hr />

        <h2>Summary</h2>
        <p dangerouslySetInnerHTML={{ __html: this.props.summary }} />

        <hr />

        <Columns>
          <div>
            <h2>Brief.</h2>
            <List items={this.props.highlights} />
          </div>

          <div>
            <h2>Tech.</h2>
            <List items={this.props.skills} />
          </div>
        </Columns>

        <hr />

        <Columns>
          <div style={{ width: '70%' }}>
            <h2>Exp.</h2>

            {this.props.experience.map(exp => {
              return <Exp key={Math.random()} {...exp} />
            })}
          </div>

          <div>
            <h2>Collab.</h2>

            <List style={{ fontSize: '0.73rem' }} items={this.props.projects} />
          </div>
        </Columns>
      </Main>
    )
  }
}
