import React from 'react';
import { useAppSelector, useTranslation } from '../hooks';
import { selectFilteredTodos } from '../features/todo/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useAppSelector(selectFilteredTodos);
  const { t } = useTranslation();

  if (todos.length === 0) {
          return (
        <div className="empty-state">
          <p>{t('emptyMessage')}</p>
          <p>{t('usageTips')}</p>
          <p>{t('tip1')}</p>
          <p>{t('tip2')}</p>
          <p>{t('tip3')}</p>
          <p>{t('tip4')}</p>
          <p>{t('tip5')}</p>
        </div>
      );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList; 