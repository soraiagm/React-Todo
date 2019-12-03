import React from 'react';

const Todo = props => {
    return (
        <div className="todo"
             onClick={(e) => props.toggleTodo(props.todo.id)}
             className={`todo${props.todo.completed ? " completed" : ""}`} >
            <h2>{props.todo.task}</h2>
        </div>
    );
}

export default Todo;