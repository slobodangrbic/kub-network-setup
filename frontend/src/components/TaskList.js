import React from 'react';
import './TaskList.css';

function TaskList(props) {
  // Check if props.tasks is undefined before mapping
  if (!props.tasks) {
    return <p>No tasks available.</p>; // or any other appropriate message or UI
  }

  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.title}>
          <h2>{task.title}</h2>
          <p>{task.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
