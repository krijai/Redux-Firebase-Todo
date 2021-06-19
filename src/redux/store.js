import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => console.log('getDefaultMiddleware------------------', getDefaultMiddleware)
});