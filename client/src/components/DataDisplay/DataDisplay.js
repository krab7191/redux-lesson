import React from 'react';
import { useSelector } from 'react-redux';
import './DataDisplay.css';

export default function DataDisplay() {
  const { error, loading, todoData } = useSelector(state => state.counter);
  return (
    <div className='todo-container'>
      {error ? <p>Weeeee got an error!!! {error}</p> : null}
      {todoData
        ? todoData.map((todo, i) => (
            <div key={`${todo.id}-${i}`} className='todo-item'>
              <p>{todo.id}. {todo.title}</p>
              <p>Completed: {todo.completed + ''}</p>
              <p>User id: {todo.userId}</p>
            </div>
          ))
        : null}
      {loading ? (
        <div className='loader'>
          <p>Loading data...</p>
        </div>
      ) : null}
    </div>
  );
}
