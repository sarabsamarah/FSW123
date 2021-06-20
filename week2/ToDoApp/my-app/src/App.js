import React from "react"
//import Database, { todos } from "./Store"
import './App.css';
//import todoList from "./todoList.js";
import List from "./todoList"
import {todos} from './Store'


function App() {
  
 
  return(
   <div>
   <h2>To do List</h2>
  
   <h3>
   <ul>
    <List tasks = {todos} />
    </ul></h3>
    </div>
  )
  
  

}

export default App;
