import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './index';
import { loadTodosFromStorage, saveTodosToStorage } from '../features/todo/todoSlice';
import { selectAllTodos } from '../features/todo/todoSlice';

export const useLocalStorage = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectAllTodos);

  // Load todos từ localStorage khi component mount
  useEffect(() => {
    dispatch(loadTodosFromStorage());
  }, [dispatch]);

  // Save todos vào localStorage khi todos thay đổi
  useEffect(() => {
    if (todos.length > 0 || todos.length === 0) {
      dispatch(saveTodosToStorage(todos));
    }
  }, [todos, dispatch]);
}; 