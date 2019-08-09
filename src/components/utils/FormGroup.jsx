import React, { Component } from 'react'

class FormGroup extends Component {
	render () {
		return (
			<div className="form-group">
				<label htmlFor={this.props.name} className="text-capitalize">{this.props.name}</label>
				{
					this.props.type === 'textarea'
					?
					(
						<textarea
							className="form-control"
							rows="5"
							name={this.props.name}
							value={this.props.value}
							onChange={this.props.change}
							required={this.props.required} >
						</textarea>
					)
					:
					(
						<input
							className="form-control" 
							autoComplete="off"
							type={this.props.type}
							name={this.props.name}
							value={this.props.value}
							defaultValue={this.props.defaultValue}
							placeholder={this.props.placeholder}
							onChange={this.props.change}
							autoFocus={this.props.focus}
							required={this.props.required}
						/>
					)
				}
			</div>
		)
	}
}

export default FormGroup