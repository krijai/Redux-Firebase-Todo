import React from 'react'

const TodoItem = (props) => {
    return (
        <li className="list-item" key={props.key}>
            <input type="checkbox" className="input-checkbox" />
            {props.title}
        </li>
    )
}

export default TodoItem;