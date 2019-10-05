import React, { Component } from 'react';
import axios from 'axios';
import DisplayForm from './display-form.component';

export default class DeleteTodo extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			todo_description: '',
			todo_responsible: '',
			todo_priority: '',
			todo_completed: false
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/todos/' + this.props.match.params.id)
			.then(res => {
				this.setState({
					todo_description: res.data.todo_description,
					todo_responsible: res.data.todo_responsible,
					todo_priority: res.data.todo_priority,
					todo_completed: res.data.todo_completed
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	onSubmit(e) {
		e.preventDefault();

		axios
			.delete(
				'http://localhost:4000/todos/delete/' + this.props.match.params.id
			)
			.then(res => {
				console.log(res.data);
			});

		this.props.history.push('/');
	}

	render() {
		return (
			<DisplayForm
				description={this.state.todo_description}
				responsible={this.state.todo_responsible}
				priority={this.state.todo_priority}
				completed={this.state.todo_completed}
				isStatic={true}
				onSubmit={this.onSubmit}
				onChangeDescription={null}
				onChangeResponsible={null}
				onChangePriority={null}
				onChangeCompleted={null}
			/>
		);
	}
}
