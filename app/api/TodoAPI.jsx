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
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
    });

    // sort todos with non-completed first
    filteredTodos.sort( (a, b) => {
      return (!a.completed && b.completed) ? -1 :
              (a.completed && !b.completed) ? 1 : 0;
    });

    return filteredTodos;
  }
};
