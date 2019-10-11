import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={ props.todo.todo_completed ? 'completed' : ''}>{ props.todo.todo_description }</td>
        <td className={ props.todo.todo_completed ? 'completed' : ''}>{ props.todo.todo_responsible }</td>
        <td className={ props.todo.todo_completed ? 'completed' : ''}>{ props.todo.todo_priority }</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link> | <Link to={"/delete/"+props.todo._id}>Delete</Link>
        </td>
    </tr>
)

const TodosList = () => {
    const [todos, setTodos] = useState([]);

    const todoList = () => {
        return todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    useEffect(() => {
        axios.get('http://localhost:4000/todos/')
            .then(res => {
                setTodos({ todos: res.data });
            })
            .catch(function(err){
                console.log(err);
            })
      }, []);

    return (
        <div>
            <h3>Todo List</h3>
            <table className="table table-striped" style = {{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { todoList() }
                </tbody>
            </table>
        </div>
    )
}

export default TodosList;