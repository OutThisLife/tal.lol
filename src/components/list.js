import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// -----------------------------------------------

export default class List extends PureComponent {
	render() {
		return (<ul>
			{this.props.items.map(str => {
				return (<li
					key={Math.random()}
					dangerouslySetInnerHTML={{ __html: `<p>${str}</p>` }}
				/>)
			})}
		</ul>)
	}
}

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
}
