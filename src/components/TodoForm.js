import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ''
        }
    }

    handleChanges = (e) => {
        this.setState({
            todos: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.todos)

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
