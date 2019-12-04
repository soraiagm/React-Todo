import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
    constructor(){
      super();
        this.state = {
          todos: [{
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ],
         todo: ''}
    }

  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: 'false'
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  /// WILL SWITCH COMPLETED TO TRUE ONCE CLICKED ON ///
  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearTodo = (event) => {
    event.preventDefault();
      this.setState({
        todos: this.state.todos.filter(todo => {
          return !todo.completed;
        })
      })

  }

  handleChanges = (event) => {
    this.setState ({ todo: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addTodo(this.state.todo);
    this.setState({ todo: '' })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
         <h1>Todo List</h1>
           <TodoForm addTodo={this.addTodo} handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} todo={this.state.todo}/>
        </div>
        <div className="todo-list">   
           <TodoList 
             todos={this.state.todos}
             toggleTodo={this.toggleTodo}
             clearTodo={this.clearTodo}
            />
        </div>
      </div>
    );
  }
}

export default App;
