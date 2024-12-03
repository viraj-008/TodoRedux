import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/TodoSlice';


const SHowTodo = () => {

    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>

                        {todo.text}

                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SHowTodo
