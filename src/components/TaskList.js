// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map(task => {
        if (!task || !task._id) return null; // Guard clause for undefined tasks
        return (
          <li key={task._id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
            <button onClick={() => toggleTaskCompletion(task._id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
