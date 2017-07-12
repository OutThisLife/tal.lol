import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Links from '../components/links'
import List from '../components/list'
import Exp from '../components/exp'

// -----------------------------------------------

export default class Index extends PureComponent {
	render() {
		return (<main>
			<hgroup>
				<h1>Talasan<br />Nicholson</h1>
				<Links {...this.props} />
			</hgroup>

			<hr />

			<h2>Summary</h2>
			<p dangerouslySetInnerHTML={{ __html: this.props.summary }} />

			<hr />

			<div className="columns">
				<div>
					<h2>Highlights</h2>
					<List items={this.props.highlights} />
				</div>

				<div>
					<h2>Technical Skills</h2>
					<List items={this.props.skills} />
				</div>
			</div>

			<hr />

			<h2>Work Experience</h2>

			{this.props.experience.map(exp => {
				return <Exp key={Math.random()} {...exp} />
			})}
		</main>)
	}
}

Index.propTypes = {
	links: PropTypes.shape().isRequired,
	summary: PropTypes.string.isRequired,
	highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
	skills: PropTypes.arrayOf(PropTypes.string).isRequired,
	experience: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}
