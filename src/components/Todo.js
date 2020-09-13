import React from 'react';

const Todo = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.toggleItem(props.item.id)
    }

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