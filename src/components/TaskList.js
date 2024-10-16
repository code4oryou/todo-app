// TaskList.js
import React from 'react';

function TaskList({ tasks }) {
    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList; // Make sure to use 'export default'
