var React = require('react');
var {connect} = require('react-redux'); // for children to specify which data in Provider they like
var PropTypes = React.PropTypes;
// var Todo = require('Todo');
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    var renderTodos = () => {
      if(todos.length === 0){
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todos.map((todo) => {
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
    return {
      todos: state.todos  // pass todos in state to todos in props
    };
  }
)(TodoList);
