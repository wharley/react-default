import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.value}</h1>
			</div>
		)
	}
}

const mapStateToProps = state => ({value: state.field.value})
export default connect(mapStateToProps)(Field)