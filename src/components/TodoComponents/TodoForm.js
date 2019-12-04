import React from 'react';

const TodoForm = (props) => {
    
    return (
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="todo"
                    value={props.todo}
                    onChange={props.handleChanges}/>
                    <button className="add-button">Add New Todo</button>
            </form>
    );
}

export default TodoForm;

// class TodoForm extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             value: ""
//         }
//     }

//     render(){
//         return(
//             <form onSubmit={props.handleSubmit}>
//                 <input
//                     type="text"
//                     name="todo"
//                     id="todo"
//                     placeholder="todo"
//                     value={props.addTodo}
//                     onChange={props.handleChanges}/>
//                     <button className="add-button">Add New Todo</button>
//             </form>
//         )
//     }
// }