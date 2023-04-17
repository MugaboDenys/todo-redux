import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
    name : "todo",
    initialState : [],
    reducers : {
        addToDo : (state, action)=>{state.unshift(action.payload)},
        deleteTodo : (state, action)=>{
            return state.filter(item => item.id !== action.payload.id)
        },
        toggleComplete : (state, action)=>{
            return state.map(todo => todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo)
        },
        updateTodo : (state, action)=>{
            return state.map(todo=> todo.id === action.payload.id ? {...todo, inputValue: action.payload.inputValue} : todo)
        }
    }
})

export const {addToDo, deleteTodo, toggleComplete, updateTodo} = todos.actions
export default todos.reducer