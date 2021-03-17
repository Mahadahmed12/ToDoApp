import React, { Component } from "react";
import "./App.css";
import AddTodo from './AddTodo'
import Tododisplay from "./Tododisplay";

class App extends Component {
  state = {
    Todos: []
  }
  addTodo = (todo) => {
    const newTodo = [...this.state.Todos, todo]
    this.setState({ Todos: newTodo })
  }
  deleteFunc = (index) => {
    const delTodo = [...this.state.Todos]
    delTodo.splice(index, 1)
    this.setState({ Todos: delTodo })
  }
  saveFunc = (todo, index) => {
    const newTodos = [...this.state.Todos]
    newTodos[index] = todo
    this.setState({ Todos: newTodos })
  };


  render() {
    return (

      <React.Fragment>
        <AddTodo addTodo={this.addTodo}></AddTodo>
        {this.state.Todos.map((todo, index) => {
          return (
            <Tododisplay getTodo={todo} getIndex={index} cancelButton={this.cancelButton} DeleteTodo={this.deleteFunc}
              getSave={this.saveFunc} Todos={this.state.Todos}></Tododisplay>

          )
        })}
      </React.Fragment>
    );
  }
}
export default App;
