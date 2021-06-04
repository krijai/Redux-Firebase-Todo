import React from 'react';

const CompletedList = (props) => {
const completedList = [];
    return (
        <ul>
            <span>Completed List Items</span>
            { props.todos ? 
                props.todos.map((todo) => {
                if(todo.completed) {
                    return <li key={todo.id}>{todo.title}</li>
                }
            }): ''
        }
        </ul>
    )
}

export default CompletedList;