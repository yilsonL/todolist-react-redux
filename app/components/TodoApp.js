import React from 'react';

import HeaderControls from 'HeaderControls';
import TodoProgress from 'TodoProgress';
import TodoList from 'TodoList'

class TodoApp extends React.Component {
  render() {
    return(
      <div className="wrapper">
        <div className="container">
          <HeaderControls />
          <TodoProgress />
          <div className="container__footer">
            <TodoList />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp;
