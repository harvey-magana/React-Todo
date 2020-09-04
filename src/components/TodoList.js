// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {Object.entries(props.tasks).map(([key, index]) => {
                return(<Todo key={key} item={key} toggleItem={props.toggleItem} />)
            })}
            <button className="clear-btn" onClick={props.clearTodo}>
                Clear Todo
            </button>
        </div>
    )
}

export default TodoList;

