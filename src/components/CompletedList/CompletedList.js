import React from 'react';
import './CompletedList.scss';

const CompletedList = (props) => {
const completedList = [];
    return (
        <ul className="completed-list">
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