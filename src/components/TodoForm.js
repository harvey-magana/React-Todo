import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.item)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        todo="item"
                        value={this.state.item}
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;
