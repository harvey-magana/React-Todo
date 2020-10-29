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

    handleChanges = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
        /*
        this.setState({
            item: event.target.value
        })*/
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { item, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('item', rememberMe ? item : '')
        this.props.addItem(this.state.item)
        this.setState({item: ''})
    }
    
    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMd') === 'true';
        const item = rememberMe ? localStorage.getItem('item') : '';
        this.setState({ item, rememberMe });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="item"
                        todo="item"
                        value={this.state.item}
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                <label>
                    <input 
                        name="rememberMe" 
                        checked={this.state.rememberMe} 
                        onChange={this.handleChanges} 
                        type="checkbox"
                    /> Remember me
                </label>
                </form>
            </div>
        )
    }
}

export default TodoForm;
