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
      id: Date.now(),
      tasks: '',
      completed: false
    };
  }

  toggleItem = itemId => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if(task.id === itemId) {
          return {
            ...task, 
            completed: !task.completed
          }
        }
        return task
      })
    })
  }

  addItem = (itemName) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: Date.now(),
          tasks: itemName,
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
          tasks={this.state.tasks} 
        />
        <TodoList 
          tasks={this.tasks} 
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
