import { useState } from 'react';
import './index.css'
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import TodoAddingSpace from './Components/UI/TodoAddingSpace';
import PendingTodos from './Components/logical/PendingTodos';
import CompletedTodos from './Components/logical/CompletedTodos';

function App() {
  const [pendingTodos, setPendingTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const setPendingTodosHandler = (todoText) => {
    setPendingTodos((prevPendingTodos) => {
      return [...prevPendingTodos, { text: todoText, id: Math.random() }]
    })
  }

  const setCompletedTodosHandler = (todo) => {
    setCompletedTodos((prevCompletedTodos) => {
      return [...prevCompletedTodos, todo];
    })
  }

  const deletePendingTodo = (id) => {
    setPendingTodos(pendingTodos.filter(todo => todo.id !== id))
  }

  const completePendingTodo = (id) => {
    setCompletedTodosHandler(pendingTodos.filter(todo => todo.id === id));
    deletePendingTodo(id);
  };

  const removeCompletedTodo = (id) => {
    setCompletedTodos(completedTodos.filter(todo => todo[0].id !== id));
  }

  return (
    <div className='app'>
      <Header></Header>
      <div>
        <TodoAddingSpace onAddingTodo={setPendingTodosHandler}></TodoAddingSpace>
      </div>
      <div>
        <PendingTodos todos={pendingTodos} deleteTodo={deletePendingTodo} completeTodo={completePendingTodo}></PendingTodos>
      </div>
      <div>
        <CompletedTodos todos={completedTodos} removeTodo={removeCompletedTodo}></CompletedTodos>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
