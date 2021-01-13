import React from 'react';
import './styles/App.css';
import TodoProvider from './context/TodoProvider';


const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Hello Numan</h1>
      </div>
    </TodoProvider>
  );
}

export default App;