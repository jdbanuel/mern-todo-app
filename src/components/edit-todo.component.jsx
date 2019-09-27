import React, { Component } from 'react';
import acios from 'axios';
import Axios from 'axios';

export default class EditTodo extends Component {
    constructor(props){
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then( res => {
                this.setState({
                    todo_description: res.data.todo_description,
                    todo_responsible: res.data.todo_responsible,
                    todo_priority: res.data.todo_priority,
                    todo_completed: res.data.todo_completed
                })
            })
            .catch( err => {
                console.log(err);
            })
    }
    
    render() {
        return (
            <div>
                <p>Welcome to the Edit Todo Component!</p>
            </div>
        )
    }
}