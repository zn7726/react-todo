var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var PropTypes = React.PropTypes;
var actions = require('actions');

// need to export both the vanila verion of Todo and the Connected version of
// Todo. We need the vanila version for testing purpose only

export var Todo = React.createClass({

  render: function() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = ()=>{
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName}
           onClick={ () => {
             // not calling callback being passed from parent
              dispatch(actions.toggleTodo(id));
            }}
      >
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>

    );
  }

});

export default connect()(Todo);
