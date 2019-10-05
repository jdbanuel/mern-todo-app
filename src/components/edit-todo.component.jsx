import React, { Component } from 'react';
import DisplayForm from './display-form.component.jsx';
import axios from 'axios';

export default class EditTodo extends Component {
	constructor(props) {
		super(props);

		this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
		this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
		this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
		this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			todo_description: '',
			todo_responsible: '',
			todo_priority: '',
			todo_completed: false
		};
	}

	onChangeTodoDescription(e) {
		this.setState({
			todo_description: e.target.value
		});
	}

	onChangeTodoResponsible(e) {
		this.setState({
			todo_responsible: e.target.value
		});
	}

	onChangeTodoPriority(e) {
		this.setState({
			todo_priority: e.target.value
		});
	}

	onChangeTodoCompleted(e) {
		this.setState({
			todo_completed: !this.state.todo_completed
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const modifiedTodo = {
			todo_description: this.state.todo_description,
			todo_responsible: this.state.todo_responsible,
			todo_priority: this.state.todo_priority,
			todo_completed: this.state.todo_completed
		};

		console.log(modifiedTodo);

		axios
			.post(
				'http://localhost:4000/todos/update/' + this.props.match.params.id,
				modifiedTodo
			)
			.then(res => console.log(res.data));

		this.props.history.push('/');
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

	render() {
		return (
			<DisplayForm
				description={this.state.todo_description}
				responsible={this.state.todo_responsible}
				priority={this.state.todo_priority}
				completed={this.state.todo_completed}
				isStatic={false}
				onSubmit={this.onSubmit}
				onChangeDescription={this.onChangeTodoDescription}
				onChangeResponsible={this.onChangeTodoResponsible}
				onChangePriority={this.onChangeTodoPriority}
				onChangeCompleted={this.onChangeTodoCompleted}
			/>
		);
	}
}
