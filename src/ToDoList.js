import React from 'react';
import ToDo from "./ToDo";

const ToDoList = (props) => {

    const { todos, checkTask } = props

    return (
        <div>
            {todos.map(todo => {
                return <ToDo key={todo.id} todo={todo} checkTask={checkTask}/>
            })}
        </div>
    );
}

export default ToDoList;

