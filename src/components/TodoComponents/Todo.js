import React from 'react';

const Todo = props => {
    return (
        <div 
             
             className="todo"
             style={{ textDecoration: props.todo.completed ? 'line-through' : 'none', }} 
             onClick={(e) => props.toggleTodo(props.todo.id)}>
            <h2>{props.todo.task}</h2>
        </div>
    );
}

export default Todo;