import React from 'react';
import _ from 'lodash';
import TodoHeader from './TodoHeader'
import TodoListItem from './TodoListItem'

export default class TodoList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props}/>);
  }

  render() {
    return (
      <table className="table">
        <TodoHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
