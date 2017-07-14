var React = require('react');
var PropTypes = React.PropTypes;

var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();

    var todoText = this.refs.todoText.value;
    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    }else{
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Enter todo"/>
          <button className="button expended">Add Todo</button>
        </form>
      </div>

    );
  }

});

module.exports = AddTodo;
