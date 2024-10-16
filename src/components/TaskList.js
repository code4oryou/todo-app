// TaskList.js
import React from 'react';

// TaskList.js
function TaskList({ tasks, deleteTask, toggleCompleteTask }) {
    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
                    >
                        <span onClick={() => toggleCompleteTask(index)}>{task.text}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;

