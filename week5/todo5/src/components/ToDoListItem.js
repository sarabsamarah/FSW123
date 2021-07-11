import React from 'react';


export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    const {task, isCompleted} = this.props;
    const taskStyle =  isCompleted ? 'done' : ''

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input className="form-control" type="text" defaultValue={task} ref="editInput"/>
          </form>
        </td>
      );
    }
    return (
      <td className={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
        {task}
      </td>
    );
  }
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button className="pull-right btn btn-sm btn-info" onClick={this.onSaveClick.bind(this)}>Save</button>
          <button className="pull-right btn btn-sm btn-default" onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    return (
      <td>
        <button className="pull-right btn btn-sm btn-default" onClick={this.onEditClick.bind(this)}>Edit</button>
        <button className="pull-right btn btn-sm btn-default" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
      </tr>
    );
  }

  onEditClick() {
    this.setState({isEditing: true});
  }

  onCancelClick() {
    this.setState({isEditing: false});
  }

  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({isEditing: false});
  }
}