import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// -----------------------------------------------

export default class Index extends PureComponent {
	render() {
		return (<main>
			<hgroup>
				<h1>Talasan<br />Nicholson</h1>
				<h5>
					[{Object.keys(this.props.links).map(l => {
						return (<span key={Math.random()}>
							<a
								href={this.props.links[l]}
								target="_blank"
								rel="noopener noreferrer"
								dangerouslySetInnerHTML={{ __html: l }}
							/>,&nbsp;
						</span>)
					})}]
				</h5>
			</hgroup>

			<hr />

			<h2>Summary</h2>
			<p dangerouslySetInnerHTML={{ __html: this.props.summary }} />

			<hr />

			<div className="columns">
				<div>
					<h2>Highlights</h2>
					<ul>
						{this.props.highlights.map(str => {
							return (<li
								key={Math.random()}
								dangerouslySetInnerHTML={{ __html: `<p>${str}</p>` }}
							/>)
						})}
					</ul>
				</div>

				<div>
					<h2>Technical Skills</h2>
					<ul>
						{this.props.skills.map(str => {
							return (<li
								key={Math.random()}
								dangerouslySetInnerHTML={{ __html: `<p>${str}</p>` }}
							/>)
						})}
					</ul>
				</div>
			</div>

			<hr />

			<h2>Work Experience</h2>

			{this.props.experience.map(exp => {
				return (<article key={Math.random()}>
					<h3>
						<a
							href={exp.url}
							target="_blank"
							rel="noopener noreferrer"
							dangerouslySetInnerHTML={{ __html: exp.company }}
						/>
						&nbsp;
						<span dangerouslySetInnerHTML={{ __html: exp.position }} />
					</h3>

					<ul>
						{(exp.responsibilities || []).map(r => {
							return (<li key={Math.random()}>
								<p dangerouslySetInnerHTML={{ __html: r }} />
							</li>)
						})}
					</ul>
				</article>)
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
