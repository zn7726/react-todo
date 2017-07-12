var $ = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
    // return UNDEFINED if invalid input
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = []; // default return

    try{
      todos = JSON.parse(stringTodos);
    }catch(e){
      console.log('ERROR => ' + e);
    }

    return $.isArray(todos) ? todos : [];
  }
};
