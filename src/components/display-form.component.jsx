import React, { Component } from 'react';

export default class DisplayForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let header, submitButton;
		if (this.props.isStatic) {
			header = <h3 align="center">Delete Todo</h3>;
			submitButton = (
				<div className="form-group">
					<input type="submit" value="Delete Todo" className="btn btn-danger" />
				</div>
			);
		} else {
			header = <h3 align="center">Update Todo</h3>;
			submitButton = (
				<div className="form-group">
					<input
						type="submit"
						value="Update Todo"
						className="btn btn-primary"
					/>
				</div>
			);
		}
		return (
			<div>
				<div>
					<ul>
						<li>{this.props.description}</li>
						<li>{this.props.responsible} </li>
						<li>{this.props.priority}</li>
						<li>{this.props.completed}</li>
					</ul>
				</div>

				<div>
					{header}
					<form onSubmit={this.props.onSubmit}>
						<div className="form-group">
							<label>Description</label>
							<input
								type="text"
								className="form-control"
								value={this.props.description}
								readOnly={this.props.isStatic}
								onChange={this.props.onChangeDescription}
							/>
						</div>
						<div className="form-group">
							<label>Responsible</label>
							<input
								type="text"
								className="form-control"
								value={this.props.responsible}
								readOnly={this.props.isStatic}
								onChange={this.props.onChangeResponsible}
							/>
						</div>
						<div className="form-group">
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="priorityOptions"
									id="priorityLow"
									value="Low"
									readOnly={this.props.isStatic}
									checked={this.props.priority === 'Low'}
									onChange={this.props.onChangePriority}
								/>
								<label className="form-check-label">Low</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="priorityOptions"
									id="priorityMedium"
									value="Medium"
									readOnly={this.props.isStatic}
									checked={this.props.priority === 'Medium'}
									onChange={this.props.onChangePriority}
								/>
								<label className="form-check-label">Medium</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="priorityOptions"
									id="priorityHigh"
									value="High"
									readOnly={this.props.isStatic}
									checked={this.props.priority === 'High'}
									onChange={this.props.onChangePriority}
								/>
								<label className="form-check-label">High</label>
							</div>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								id="completedCheckbox"
								type="checkbox"
								name="completedCheckbox"
								readOnly={this.props.isStatic}
								onChange={this.props.onChangeCompleted}
								checked={this.props.completed}
								value={this.props.completed}
							/>
							<label className="form-check-label" htmlFor="completedCheckbox">
								Completed
							</label>
						</div>
						<br />
						{submitButton}
					</form>
				</div>
			</div>
		);
	}
}
