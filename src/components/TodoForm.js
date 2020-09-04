import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: {
              id: Date.now(),
              todo: '',
              completed: false
            }
        };
    }

    handleChanges = (e) => {
        this.setState({
            todos: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state.todos)
        e.preventDefault();
        this.props.addItem({
            todos: [
                ...this.state.todos,
                {
                  id: Date.now(),
                  todos: e.target.value,
                  completed: false
                }
              ]
        })

        // you want to spread the state first, 
        // then if there is a property inside of that state that you want to create something new of
        // you want to spread that state first and then update it with what you want
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    todo="item"
                    value={this.state.todos}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;
