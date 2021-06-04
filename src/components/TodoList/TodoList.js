import React, { useState, useEffect, useReducer } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { addTodo, addTodos, getTodos } from '../../redux/todoSlice';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { v4 as uuidv4} from 'uuid';
import firebase from '../../firebase';
import 'firebase/firestore';

const TodoList = (props) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        if(value){
            dispatch(
                addTodos({
                    id:uuidv4(),
                    title: value,
                    completed: false
                })
            )
            props.resetItemField();
            setValue('');
        }
    }

    useEffect(()=> {
        const ref = firebase.firestore().collection("todos");
            ref.onSnapshot((querySnapshot) => {
                console.log("onSnapshot Hit");
                const updatedState = [];
                querySnapshot.forEach((doc) => {
                    updatedState.push(doc.data());
                });
                console.log('onSnapshot updatedState ------ ',updatedState);
                dispatch(getTodos());
            });

        dispatch(getTodos());
    }, [dispatch]);

    return (
        <ul className="list-group">
            { props.todos ?
            
            props.todos.map((todo) => {
                return <TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
            }) : ''
            
            }
            { props.newItem ? 
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="Add Todo.." 
                value={value} 
                onChange={(event) => setValue(event.target.value)}/>
                <button type="submit"> OK</button>
            </form> : ''
            }
        </ul>
    )
}

export default TodoList;