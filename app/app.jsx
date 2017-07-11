// need to import libs as shown below since we have removed the <script src=''/> statements
// in index.html (exist still in index_old.html)
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// EFFECTIVLY EQUAL => var Route = require('react-router').Route

// load foundation
$(document).foundation();

// App css
//require('style!css!applicationStyles'); //<- for css
require('style!css!sass!applicationStyles');  // for scss

// router
ReactDOM.render(
  <p>React template 3</p>,
  document.getElementById('app')
);
