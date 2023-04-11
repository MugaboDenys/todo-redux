import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
    name : "todo",
    initialState : [],
    reducers : {
        addToDo : (state, action)=>{
            state.unshift(action.payload)
        },
        deleteTodo : (state, action)=>{
            return(
                state.filter(item => item.id !== action.payload.id)
            )
        },
        toggleComplete : (state, action)=>{
            console.log(action.payload.id);
            return(
                state.map(obj => obj.id === action.payload.id ? { ...obj, complete: !obj.complete } : obj)
            )
        },
        updateTodo : (state, action)=>{
            return(
                state.map(obj=> obj.id === action.payload.id ? {...obj, inputValue: action.payload.inputValue} : obj)
            )
        }
    }
})

export const {addToDo, deleteTodo, toggleComplete, updateTodo} = todos.actions
export default todos.reducer