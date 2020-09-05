import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [{
        id: Date.now(),
        todo: '',
        completed: false
      }]
    };
  }

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === itemId) {
          return {
            ...todo, 
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  clearTodo = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      })
    })
  }

  addItem = (itemName) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Date.now(),
          todos: itemName,
          completed: false
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          todos={this.state.todos} 
          addItem={this.addItem}
        />
        <TodoList 
            tasks={this.state.todos} 
            toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
