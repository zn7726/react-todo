var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var PropTypes = React.PropTypes;

export var TodoSearch = React.createClass({
  // handleSearch: function () {
  //   var showCompleted = this.refs.showCompleted.checked;
  //   var searchText = this.refs.searchText.value;
  //
  //   this.props.onSearch(showCompleted, searchText);
  // },
  render: function() {
    var {dispatch, showCompleted, searchText} = this.props; // passed by connect()

    return (
      <div  className="container__header">
        <div><input type="search" ref="searchText" placeholder="Search Todos"
                    value={searchText}
                    onChange={()=>{
                      dispatch(actions.setSearchText(this.refs.searchText.value));
                    }} /></div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
                dispatch(actions.toggleShowCompleted());
              }} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);
