import React from 'react';
import './App.css';
import ToDo4List from './ToDo4List'
import todos from './ToDo4Store';
import { v4 as uuidv4 } from "uuid";

class ToDo4 extends React.Component {
  constructor() {
    super()
    this.state = { value:'',
      aryTodos: todos.map((item, index) =>
        ({
          key: index,
          id: item.id,
          text: item.text,
          isCompleted: item.isCompleted
        })
      )
  }
}

handleChange=(event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit=(event) =>{
    event.preventDefault();
    if(this.state.value.length > 1) { 
    alert('A task has been added: ' + this.state.value);
    console.log(this.state.value)
    var newTodo = {   
        id: uuidv4(),
        text: this.state.value,
        isCompleted: false
    }
    this.setState({value:'', aryTodos:[...this.state.aryTodos,newTodo]});
} else {
    alert("Please add an item")
}
  }


 completeTodo = (e) =>{
  if (e) {
    let aryUpdatedTodos = [...this.state.aryTodos]
    let index = aryUpdatedTodos.findIndex (item => item.id ===e);
    let updatedTodo = {...aryUpdatedTodos[index]}
    if(updatedTodo.isCompleted) {
      updatedTodo.isCompleted = false
    } else{
      updatedTodo.isCompleted = true
    }
    aryUpdatedTodos[index] = updatedTodo
    this.setState({
      aryTodos: aryUpdatedTodos
    })
  }
}
deleteTodo = (e) => {
  if (e) {
    let aryDeletedTodos = [...this.state.aryTodos]
    let index = aryDeletedTodos.findIndex( item => item.id === e);
    aryDeletedTodos.splice(index, 1)
    this.setState({
      aryTodos: aryDeletedTodos
    })
  }  
}



render() {
  const todoLists = this.state.aryTodos.map((item, index) => {
    return (
      <ToDo4List
      key = {item.key}
      id = {item.id}
      text = {item.text}
      isCompleted = {item.isCompleted}
      completeTodo = {this.completeTodo}
      deleteTodo = {this.deleteTodo}
      
      />
    )
  })
  return (
    <div className= 'Todo3Span'>
      <div className= "Todo3Span">My Todo List Week 4</div>
      <form onSubmit={this.handleSubmit}>
                <label>
                Task:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
      {todoLists}
    </div>
    )
  }
}

export default ToDo4;