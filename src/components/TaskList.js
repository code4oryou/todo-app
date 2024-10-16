// src/TaskList.js
import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.name}
                    <button onClick={() => toggleCompletion(index)}>
                        {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
