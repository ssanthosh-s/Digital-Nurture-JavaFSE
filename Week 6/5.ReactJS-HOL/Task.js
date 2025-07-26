import React from 'react';
import styles from './Task.module.css';

function Task({ title, description, status }) {
  let color = 'black';

  if (status === 'completed') color = 'green';
  else if (status === 'pending') color = 'orange';
  else if (status === 'overdue') color = 'red';

  return (
    <div className={styles.card}>
      <h3 style={{ color }}>{title}</h3>
      <p>{description}</p>
      <p>Status: <strong>{status}</strong></p>
    </div>
  );
}

export default Task;
