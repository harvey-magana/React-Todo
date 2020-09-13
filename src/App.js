import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    id: Date.now(),
    name: 'Walk',
    completed: false
  },
  {
    id: Date.now(),
    name: 'Trash',
    completed: false
  },
  {
    id: Date.now(),
    name: 'Garage',
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if(item.id === itemId) {
          return {
            ...item, 
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  clearTodo = () => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return !item.completed;
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
            todos={this.state.todos} 
            toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
