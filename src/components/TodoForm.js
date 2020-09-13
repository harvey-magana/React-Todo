import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
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

        // you want to spread the state first, 
        // then if there is a property inside of that state that you want to create something new of
        // you want to spread that state first and then update it with what you want
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
