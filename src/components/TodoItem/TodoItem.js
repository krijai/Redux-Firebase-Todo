import React from 'react';
import { useDispatch  } from 'react-redux';
import { toggleTodoItem } from '../../redux/todoSlice';
import './TodoItem.scss';

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const handleCheckboxClick = () => {
        dispatch(toggleTodoItem({
            id: props.id,
            completed: !props.completed
        }))
    }

    return (
        <li className={`list-item ${props.completed ? 'strike' : ''}`} key={props.id}>
            <input type="checkbox" className={`input-checkbox ${props.completed ? 'active' : ''}`} onClick={handleCheckboxClick} checked={props.completed}/>
            {props.title}
        </li>
    )
}

export default TodoItem;