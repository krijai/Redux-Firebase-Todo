import './App.scss';
import AddButton from './components/AddButton/AddButton';
import TodoList from './components/TodoList/TodoList';
import CompletedList from './components/CompletedList/CompletedList';
import {Tabs, Tab} from './components/Tabs/Tabs';

const App = () => {
  return(
    <div>
      <h1>My Todo List</h1>
      <AddButton />
      <Tabs>
        <Tab label="todo-list">
          <TodoList />
        </Tab>
        <Tab label="completed-list">
          <CompletedList />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
