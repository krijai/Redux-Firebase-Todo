import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4} from 'uuid';
import firebase from '../firebase';
import 'firebase/firestore';

export const getTodos = createAsyncThunk('firebase/getTodos', async (todos) => {
    const ref = firebase.firestore().collection("todos");

   const promise = ref.get().then((item) => {
        const todos = item.docs.map((doc) => {
            return doc.data();
        })
        return todos;
    });

    if(promise) {
        const todosList = await promise;
        console.log('todosList',todosList);
        return todosList;
    }


});

export const addTodos = createAsyncThunk('firebase/addTodos', async (todos) => {
    const ref = firebase.firestore().collection("todos");
    const promise = ref.doc(todos.id).set(todos)
    .then(() => {
    console.log("Item Added Successfully!");
    })
   .catch((err) => {
       console.log(err);
   })
});

export const toggleTodoItem = createAsyncThunk('firebase/toggleTodoItem', async (todos) => {
    const ref = firebase.firestore().collection("todos");
    const promise = ref.doc(todos.id).update({completed: todos.completed})
    .then(() => {
    console.log("Item toggleed Successfully!");
    })
   .catch((err) => {
       console.log(err);
   })
});

export const todoSlice = createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: uuidv4(),
                title: action.payload.title,
                completed: false
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        }
    },
    extraReducers: {
        [getTodos.pending] : (state,action) => {
            console.log('extraReducers getTodos Pending Hit');
        },
        [getTodos.fulfilled] : (state,action) => {
            console.log('extraReducers getTodos Fulfilled Hit', action.payload);
            state.push(action.payload)
        },
        [addTodos.fulfilled] : (state, action) => {
            console.log('extraReducers addTodos fulfilled Hit');
        }
    }
});

export const { addTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;