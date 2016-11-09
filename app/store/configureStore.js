import * as redux from 'redux';

import {todosReducer, showCompletedReducer, searchTextReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    todos: todosReducer,
    showCompleted: showCompletedReducer,
    searchText: searchTextReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
