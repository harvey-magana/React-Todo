import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChanges = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log("form submitted.")
        e.preventDefault();
        this.props.addItem(this.state.task)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    todo="item"
                    value={this.state.task}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;
