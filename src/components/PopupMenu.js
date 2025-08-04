import React from 'react';
import { useAppDispatch, useAppSelector, useTranslation } from '../hooks';
import { 
  selectFilter, 
  selectTodoStats,
  selectAllTodos,
  setFilter,
  markAllAsCompleted,
  clearCompleted,
  clearAll
} from '../features/todo/todoSlice';
import { exportTodosToFile, importTodosFromFile } from '../utils/exportData';

const PopupMenu = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const { total, completed, active } = useAppSelector(selectTodoStats);
  const todos = useAppSelector(selectAllTodos);
  const { t } = useTranslation();

  const handleExport = () => {
    exportTodosToFile(todos);
    onClose();
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,.txt';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          const importedTodos = await importTodosFromFile(file);
          importedTodos.forEach(todo => {
            dispatch({ type: 'todos/addTodo', payload: todo.text });
          });
          alert(t('importSuccess'));
        } catch (error) {
          alert(error.message);
        }
      }
    };
    input.click();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-menu">
        <div className="popup-header">
          <h3>{t('actions')}</h3>
          <button className="popup-close" onClick={onClose}>×</button>
        </div>
        
        <div className="popup-content">
          {/* Filters */}
          <div className="popup-section">
            <h4>{t('filters')}</h4>
            <div className="popup-buttons">
              <button
                className={`popup-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => {
                  dispatch(setFilter('all'));
                  onClose();
                }}
              >
                {t('all')}
              </button>
              {active > 0 && (
                <button
                  className={`popup-btn ${filter === 'active' ? 'active' : ''}`}
                  onClick={() => {
                    dispatch(setFilter('active'));
                    onClose();
                  }}
                >
                  {t('inProgress')}
                </button>
              )}
              {completed > 0 && (
                <button
                  className={`popup-btn ${filter === 'completed' ? 'active' : ''}`}
                  onClick={() => {
                    dispatch(setFilter('completed'));
                    onClose();
                  }}
                >
                  {t('completed')}
                </button>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="popup-section">
            <h4>{t('actions')}</h4>
            <div className="popup-buttons">
              {active > 0 && (
                <button
                  className="popup-btn"
                  onClick={() => {
                    if (window.confirm(t('confirmMarkAll'))) {
                      dispatch(markAllAsCompleted());
                    }
                    onClose();
                  }}
                >
                  {t('finishAll')}
                </button>
              )}
              {completed > 0 && (
                <button
                  className="popup-btn"
                  onClick={() => {
                    if (window.confirm(t('confirmClearCompleted'))) {
                      dispatch(clearCompleted());
                    }
                    onClose();
                  }}
                >
                  {t('clearCompleted')}
                </button>
              )}
              {total > 0 && (
                <button
                  className="popup-btn"
                  onClick={() => {
                    if (window.confirm(t('confirmClearAll'))) {
                      dispatch(clearAll());
                    }
                    onClose();
                  }}
                >
                  {t('clearAll')}
                </button>
              )}
            </div>
          </div>

          {/* Data Management */}
          <div className="popup-section">
            <h4>{t('dataManagement')}</h4>
            <div className="popup-buttons">
              {total > 0 && (
                <button
                  className="popup-btn"
                  onClick={handleExport}
                >
                  {t('exportData')}
                </button>
              )}
              <button
                className="popup-btn"
                onClick={handleImport}
              >
                {t('importData')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupMenu; 