// need to import libs as shown below since we have removed the <script src=''/> statements
// in index.html (exist still in index_old.html)
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// EFFECTIVLY EQUAL => var Route = require('react-router').Route

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('NEW state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// load foundation
$(document).foundation();

// App css
//require('style!css!applicationStyles'); //<- for css
require('style!css!sass!applicationStyles');  // for scss

// router
ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
