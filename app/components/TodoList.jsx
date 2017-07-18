var React = require('react');
var {connect} = require('react-redux'); // for children to specify which data in Provider they like
var PropTypes = React.PropTypes;
// var Todo = require('Todo');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function() {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      if(todos.length === 0){
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }

});

// connect() is called right after the component is created
export default connect(
  (state) => {
    return state;
  }
)(TodoList);
