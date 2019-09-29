import React, { Component } from 'react';

export default class DisplayTodo extends Component {
    construct(props){
        super(props);

        this.state = {
            todo_description: props.description,
            todo_responsible: props.responsible,
            todo_priority: props.priority,
            todo_completed: props.completed,
            idReadOnly: props.isReadOnly        
        }
    }
}