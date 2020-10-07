import React from 'react';
import { getTodoData } from '../../features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function DataButton() {
  const dispatch = useDispatch();
  const { loading, todoData } = useSelector(state => state.counter);
  return (
    <button
      onClick={() => {
        dispatch(getTodoData(todoData.length + 1));
      }}
      disabled={loading}
    >
      Get todo item!
    </button>
  );
}
