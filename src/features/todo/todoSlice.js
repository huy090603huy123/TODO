import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk để load todos từ localStorage
export const loadTodosFromStorage = createAsyncThunk(
  'todos/loadFromStorage',
  async () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  }
);

// Async thunk để save todos vào localStorage
export const saveTodosToStorage = createAsyncThunk(
  'todos/saveToStorage',
  async (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
);

const initialState = {
  todos: [],
  filter: 'all',
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.unshift(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    markAllAsCompleted: (state) => {
      state.todos.forEach(todo => {
        todo.completed = true;
      });
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    clearAll: (state) => {
      state.todos = [];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodosFromStorage.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTodosFromStorage.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(loadTodosFromStorage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveTodosToStorage.fulfilled, (state, action) => {
        // Todos đã được lưu thành công
      });
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleComplete,
  editTodo,
  markAllAsCompleted,
  clearCompleted,
  clearAll,
  setFilter,
} = todoSlice.actions;

// Selectors
export const selectAllTodos = (state) => state.todos.todos;
export const selectFilter = (state) => state.todos.filter;
export const selectLoading = (state) => state.todos.loading;
export const selectError = (state) => state.todos.error;

export const selectFilteredTodos = (state) => {
  const todos = state.todos.todos;
  const filter = state.todos.filter;
  
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export const selectTodoStats = (state) => {
  const todos = state.todos.todos;
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const active = total - completed;
  
  return { total, completed, active };
};

export default todoSlice.reducer; 