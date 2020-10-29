import React from 'react';

//1. update state with a rememberMe value and set it to false
//2. add an input as a checkbox put it in the form
//3. update the handleChange method to accommodate the new value
//4. update the handleSubmitt method to accommodte the new value
//5. add componentDidMount() method 
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: '',
            rememberMd: false
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
        this.setState({item: ''})
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
