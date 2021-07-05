import React from 'react';
import '../components/Todo.css';

const Todo = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.toggleItem(props.item.id)
    }
    console.log(props.item)
    return (
        <div 
            onClick={handleClick}
            className={`item${props.item.completed ? " completed" : ""}`}
        >
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo;