import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// -----------------------------------------------

export default class Links extends PureComponent {
	render() {
		return (<h5>
			[{Object.keys(this.props.links).map(l => {
				return (<span key={Math.random()}>
					<a
						href={this.props.links[l]}
						target="_blank"
						rel="noopener noreferrer"
						dangerouslySetInnerHTML={{ __html: l }}
					/>
				</span>)
			})}]
		</h5>)
	}
}

Links.propTypes = {
	links: PropTypes.shape().isRequired,
}
