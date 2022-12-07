import React from 'react';

const ToDo = (props) => {

    const { todo, checkTask } = props

    const handleTodoClick = () => {
        checkTask(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
                {todo.name}
            </label>
        </div>
    );
}

export default ToDo;