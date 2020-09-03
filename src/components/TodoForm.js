import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    render() {
        return (
            <form>
                <input />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;
