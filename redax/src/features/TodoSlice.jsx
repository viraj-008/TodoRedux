import { createSlice } from '@reduxjs/toolkit';

const initialState =
    [{ id: 1, text: "helloe" },

    ]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            const newTodo = {
                id: Date.now(),
                text: actions.payload
            }

            state.push(newTodo)
        },
        deleteTodo: (state, actions) => {
            return state = state.filter((t) => t.id !== actions.payload)
        }
    }


});



export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;