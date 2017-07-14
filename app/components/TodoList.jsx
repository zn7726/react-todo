var React = require('react');
var PropTypes = React.PropTypes;
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    var renderTodos = () => {
      if(todos.length == 0){
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> //key is mandatory
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
