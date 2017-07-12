import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// -----------------------------------------------

export default class Exp extends PureComponent {
	render() {
		return (<article>
			<h3>
				<a
					href={this.props.url}
					target="_blank"
					rel="noopener noreferrer"
					dangerouslySetInnerHTML={{ __html: this.props.company }}
				/>
				&nbsp;
				<span dangerouslySetInnerHTML={{ __html: this.props.position }} />
			</h3>

			<ul>
				{(this.props.responsibilities).map(str => {
					return (<li key={Math.random()}>
						<p dangerouslySetInnerHTML={{ __html: str }} />
					</li>)
				})}
			</ul>
		</article>)
	}
}

Exp.propTypes = {
	url: PropTypes.string,
	company: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Exp.defaultProps = {
	url: 'javascript:;',
	responsibilities: [],
}
