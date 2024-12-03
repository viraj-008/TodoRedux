import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoSlice';

const CrTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <div>
            <h1>To-Do App</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default CrTodo
