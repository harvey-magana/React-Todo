import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    handleChanges = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.todos.push({
            todo: this.state.item, 
            completed: false,
            id: Date.now()
        })
    }

    render() {
        return (
            <form>
                <input 
                    type="text"
                    todo="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;
