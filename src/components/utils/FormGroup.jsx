import React, { Component } from 'react'

class FormGroup extends Component {
	render () {
		return (
			<div className="form-group">
				<label htmlFor={this.props.name} className="text-capitalize">{this.props.name}</label>
				<input
					className="form-control" 
					autoComplete="off"
					type={this.props.type}
					id={this.props.name}
					name={this.props.name}
					value={this.props.value}
					defaultValue={this.props.defaultValue}
					placeholder={this.props.placeholder}
					onChange={this.props.change}
					autoFocus={this.props.focus}
				/>
			</div>
		)
	}
}

export default FormGroup