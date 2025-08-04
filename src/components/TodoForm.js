import React, { useState } from 'react';
import { useAppDispatch, useTranslation } from '../hooks';
import { addTodo } from '../features/todo/todoSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText('');
    }
  };

  return (
    <div className="add-content-wrapper">
                      <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={t('addPlaceholder')}
                  className="add-content"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit(e);
                    }
                  }}
                />
                <button
                  type="button"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  {t('addButton')}
                </button>
    </div>
  );
};

export default TodoForm; 