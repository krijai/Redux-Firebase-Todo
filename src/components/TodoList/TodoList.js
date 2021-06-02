import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {
    const todos = [
        {id:1, title: "Item1", completed: false},
        {id:2, title: "Item2", completed: false},
        {id:3, title: "Item3", completed: true}
    ];

    return (
        <ul className="list-group">
            {todos.map((todo) => {
                return <TodoItem key={todo.id} title={todo.title} />
            })}
        </ul>
    )
}

export default TodoList;