var React = require('react');
var PropTypes = React.PropTypes;
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/> //key is mandatory
                                          //{...todo} pass all properties into <Todo> as props 
        )
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }

});

module.exports = TodoList;
