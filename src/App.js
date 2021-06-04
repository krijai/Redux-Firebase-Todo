import './App.scss';
import AddButton from './components/AddButton/AddButton';
import TodoList from './components/TodoList/TodoList';
import CompletedList from './components/CompletedList/CompletedList';
import {Tabs, Tab} from './components/Tabs/Tabs';
import { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const App = () => {
  const [newItem, setNewItem] = useState(false);
  const addNewItem = () => {
    setNewItem(true);
  };

  const resetAddNewItemField = () => {
    setNewItem(false);
  }

  const todos = useSelector((state) => {
    console.log("useSelectoruseSelector");
    const len = state.todos.length;
    const todoValues = state.todos[len - 1];
    return todoValues;
  }, shallowEqual);

  return(
    <div>
      <h1>My Todo List</h1>
      <AddButton addNewItem={addNewItem}/>
      <Tabs>
        <Tab label="todo-list">
          <TodoList newItem={newItem} resetItemField={resetAddNewItemField} todos={todos}/>
        </Tab>
        <Tab label="completed-list">
          <CompletedList todos={todos}/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
