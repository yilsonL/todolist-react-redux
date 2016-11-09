export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var editTodo = (id, text) => {
  return {
    type: 'EDIT_TODO',
    id,
    text
  }
}

export var deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};
