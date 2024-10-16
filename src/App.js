import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
