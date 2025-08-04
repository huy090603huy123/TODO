import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { useLocalStorage, useTranslation } from './hooks';
import { useAppDispatch, useAppSelector } from './hooks';
import { selectTodoStats, markAllAsCompleted } from './features/todo/todoSlice';
import { LanguageProvider } from './contexts/LanguageContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Sidebar from './components/Sidebar';
import LanguageToggle from './components/LanguageToggle';
import './App.css';

// Component chính sử dụng Redux
const TodoApp = () => {
  const dispatch = useAppDispatch();
  const { total, active } = useAppSelector(selectTodoStats);
  const { t } = useTranslation();
  
  // Sử dụng localStorage hook
  useLocalStorage();

  return (
    <>
      <div className="bg-pattern"></div>
      <div className="todo-wrapper">
        <div className="todo-app">
          {/* Header */}
          <div className="header">
            <div className="todo-input">
              <h1 className="title">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDJDMzAuNTQ3IDIgMzkgMTAuNDUzIDM5IDIxQzM5IDMxLjU0NyAzMC41NDcgNDAgMjAgNDBDOS40NTMgNDAgMSAzMS41NDcgMSAyMUMxIDEwLjQ1MyA5LjQ1MyAyIDIwIDJaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xOCA5SDIyVjE5SDE4VjlaIiBmaWxsPSIjMzMzMzIzIi8+CjxwYXRoIGQ9Ik0xNiAxN0gyNFYxOUgxNlYxN1oiIGZpbGw9IiMzMzMzMjMiLz4KPC9zdmc+Cg==" alt="Todo" className="title-1" />
                {t('title')}
              </h1>
              <Sidebar />
              <TodoForm />
            </div>
          </div>

          {/* Main Content */}
          <div className="main">
            <div className="todo-list-box">
              {/* Control Bar */}
              <div className="bar-message">
                {total > 0 && (
                  <button
                    className="btn-allFinish"
                    onClick={() => {
                      if (window.confirm('Confirm to mark all as completed?')) {
                        dispatch(markAllAsCompleted());
                      }
                    }}
                  >
                    {t('markAllDone')}
                  </button>
                )}
                <div className="bar-message-text">
                  {t('slogan')}
                </div>
              </div>

              {/* Todo List */}
              <TodoList />
              {/* Sidebar */}
           
              {/* Status Message */}
              {total > 0 && (
                <div className="stats">
                  {active > 0 ? (
                    <span>{active} {t('itemsRemaining')}</span>
                  ) : (
                    <span>{t('allCompleted')}</span>
                  )}
                </div>
              )}
            </div>

        
          </div>

          {/* Navigation */}
          <div className="nav">
            <div className="github">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDBDNC40NzcgMCAwIDQuNDc3IDAgMTBDMCAxNC40MTEgMi44NjYgMTguMTY5IDYuODM5IDE5LjUyOEM3LjA0NyAxOS42NzUgNy4yNzUgMTkuNjE5IDcuMzM5IDE5LjQwNEM3LjQwMyAxOS4xODkgNy4yNzUgMTguOTU2IDcuMDY5IDE4Ljg1NEM0LjI1NyAxNy42NzEgMy4xNDMgMTQuOTc0IDMuMTQzIDEyLjVDMy4xNDMgMTEuNzUgMy4yNSAxMS4wNjMgMy40NTcgMTAuNDE5QzMuNTY5IDEwLjA2MyAzLjQxOSA5LjY5NCAzLjE1IDkuNDU2QzIuODgxIDkuMjE4IDIuNTY5IDkuMTI1IDIuMjUgOS4xODhDMS45MzEgOS4yNTEgMS42NTYgOS40NzUgMS40NzUgOS43ODFDMS4yOTQgMTAuMDg3IDEuMjI1IDEwLjQ0NCAxLjI3NSAxMC43OTlDMS4zMjUgMTEuMTU0IDEuNDk0IDExLjQ4NyAxLjc1IDExLjc1QzEuODc1IDExLjg3NSAxLjkzOCAxMi4wNjMgMS45MzggMTIuMjVDMS45MzggMTIuNDM3IDEuODc1IDEyLjYyNSAxLjc1IDEyLjc1QzEuNjI1IDEyLjg3NSAxLjUgMTMgMS41IDEzLjEyNUMxLjUgMTMuMjUgMS42MjUgMTMuMzc1IDEuNzUgMTMuNUMyLjEyNSAxMy44NzUgMi42MjUgMTQuMjUgMy4yNSAxNC42MjVDMy44NzUgMTUgNC42MjUgMTUuMzc1IDUuNSAxNS43NUM2LjM3NSAxNi4xMjUgNy4zNzUgMTYuNSA4LjUgMTYuODc1QzkuNjI1IDE3LjI1IDEwLjg3NSAxNy40MzggMTIuMjUgMTcuNDM4QzEzLjYyNSAxNy40MzggMTQuODc1IDE3LjI1IDE2IDE2Ljg3NUMxNy4xMjUgMTYuNSAxOC4xMjUgMTYuMTI1IDE5IDE1Ljc1QzE5Ljg3NSAxNS4zNzUgMjAuNjI1IDE1IDIxLjI1IDE0LjYyNUMyMS44NzUgMTQuMjUgMjIuMzc1IDEzLjg3NSAyMi43NSAxMy41QzIyLjg3NSAxMy4zNzUgMjMgMTMuMjUgMjMgMTMuMTI1QzIzIDEzIDIyLjg3NSAxMi44NzUgMjIuNzUgMTIuNzVDMjIuNjI1IDEyLjYyNSAyMi41IDEyLjUgMjIuNSAxMi4zNzVDMjIuNSAxMi4yNSAyMi42MjUgMTIuMTI1IDIyLjc1IDEyQzIyLjg3NSAxMS44NzUgMjIuOTM4IDExLjY4OCAyMi45MzggMTEuNUMyMi45MzggMTEuMzEyIDIyLjg3NSAxMS4xMjUgMjIuNzUgMTAuOTM4QzIyLjYyNSAxMC43NSAyMi41IDEwLjU2MyAyMi41IDEwLjM3NUMyMi41IDEwLjE4OCAyMi42MjUgMTAuMDYzIDIyLjc1IDkuOTM4QzIzLjAxNiA5LjcwNiAyMy4xODUgOS4zNzMgMjMuMjM1IDkuMDM4QzIzLjI4NSA4LjcwMyAyMy4yMTYgOC4zNDYgMjMuMDM1IDguMDQzQzIyLjg1NCA3LjczOSAyMi41NzEgNy41MTUgMjIuMjUgNy40NTJDMjEuOTI5IDcuMzg5IDIxLjU5OCA3LjQ4MiAyMS4zMjkgNy43MkMyMS4wNiA3Ljk1OCAyMC45MSA4LjMyNyAyMC44OTggOC43MTlDMjAuODg2IDkuMTExIDIwLjkxOSA5LjQ4NiAyMC45OTIgOS44NDFDMjEuMDY1IDEwLjE5NiAyMS4xODggMTAuNTMxIDIxLjM2MSAxMC44NDZDMTkuNzE0IDkuNzUgMTcuNzUgOS4xODggMTUuNTYzIDkuMTg4QzE0LjQzOCA5LjE4OCAxMy4zNzUgOS4zNzUgMTIuMzc1IDkuNzVDMTEuMzc1IDEwLjEyNSAxMC40NjkgMTAuNjI1IDkuNjU2IDExLjI1QzguODQzIDExLjg3NSA4LjE1NiAxMi42MjUgNy41OTQgMTMuNUMyLjg1NiAxNC45NzQgMS43NDMgMTcuNjc5IDAuNzUgMTguODU0QzAuNTQ0IDE4Ljk1NiAwLjQxNiAxOS4xODkgMC40OCAxOS40MDRDMC41NDQgMTkuNjE5IDAuNzcyIDE5LjY3NSAxLjA2OSAxOS41MjhDNS4xMzQgMTguMTY5IDggMTQuNDExIDggMTBDOCA0LjQ3NyAzLjUyMyAwIDEwIDBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="GitHub" className="ic-social" />
              </a>
            </div>
            <div className="about">
              <div className="info">
                <div className="info-ico">{t('about')}</div>
              </div>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </>
  );
};

// App component với Redux Provider
function App() {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <TodoApp />
      </LanguageProvider>
    </Provider>
  );
}

export default App;