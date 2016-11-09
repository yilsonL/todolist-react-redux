var uuid = require('node-uuid');
var moment = require('moment');

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'EDIT_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          return {
            ...todo,
            text: action.text
          }
        } else {
          return todo;
        }
      });
    case 'DELETE_TODO':
      return state.filter((todo) => {
        return todo.id !== action.id
      });
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
            completedAt: !todo.completed ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};
