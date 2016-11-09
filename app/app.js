import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';

import * as actions from 'actions';

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.querySelector('#app')
);
