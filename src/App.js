// src/App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on load
  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  // Add a new task
  const addTask = async (taskName) => {
    const newTask = { name: taskName };
    try {
      const response = await axios.post('http://localhost:5000/tasks', newTask);
      setTasks([...tasks, response.data.task]); // Add new task from backend
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete a task by ID
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id)); // Use `_id` to filter out deleted task
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Toggle completion status of a task
  const toggleTaskCompletion = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${id}/toggle`);
      const updatedTask = response.data.task;
      setTasks(tasks.map(task => (task._id === id ? updatedTask : task))); // Use `_id` to match updated task
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default App;
