import { useState } from "react";
import {MdDelete, MdModeEditOutline} from "react-icons/md"
import {IoCheckmarkSharp} from "react-icons/io5"
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete, updateTodo } from "../features/todos";

const Todo = ({children, id, complete}) => {
    const dispatch = useDispatch();
    const [newInput, setNewInput] = useState("")
    const [edit, setEdit] = useState(false)

    const handleEdit = () =>{
        setNewInput(children)
        setEdit(prevEd=>!prevEd)
    }

    const handleUpdate = () =>{
        dispatch(updateTodo({id, inputValue : newInput}))
        handleEdit()
    }
    
    const handleEnter = (event) =>{
        if(event.key=== "Enter"){
            handleUpdate()
        }
    }
    
    return ( 
        <div className="flex justify-between group w-[32rem] py-2 pl-2 mt-5 border-b-2">
            <div className="flex gap-x-2">
                <input type={`${edit ? "text" : "checkbox"}`} value={edit && newInput} onKeyDown={edit ? handleEnter : undefined} placeholder={edit ? children : undefined} id={id} onChange={edit ? (event)=>{setNewInput(event.target.value)}: ()=>dispatch(toggleComplete({id}))} checked={complete} className={`${edit && "w-[25rem] outline-none"}`} />
                <label htmlFor={id} className={`${complete && "line-through"}`}>{!edit && children}</label>
            </div>
            <div className="flex gap-3">
                <MdModeEditOutline className={`text-green-600 cursor-pointer ${edit ? "hidden":"block"} `} onClick={handleEdit} />
                <IoCheckmarkSharp className={`text-green-600 cursor-pointer ${edit ? "block":"hidden"} `} onClick={handleUpdate} />
                <MdDelete className="text-red-600 cursor-pointer " onClick={()=>dispatch(deleteTodo({id}))} />
            </div>
        </div>
     );
}
 
export default Todo;