import { useState } from "react";
import "./App.css";
import {AiFillPlusCircle} from "react-icons/ai"
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./features/todos";

const App =()=> {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch()
  const todos = useSelector((state)=> state.todo)


  const handleEnter = (event) => event.key === "Enter" && addTodos()
  
    
  const addTodos = () =>{
    if(inputValue.trim()){
      dispatch(addToDo({id : nanoid(), inputValue, complete : false}))
      setInputValue("")
    }
  }
  
  return (
    <div className="flex justify-center flex-col items-center mt-32">
      <h1 className="text-[10rem] font-bold text-gray-200">todos</h1>
      <div className="w-[32rem] h-10 rounded-full shadow-lg shadow-gray-300 items-center px-5 flex justify-between">
        <input type="text" onChange={event=>setInputValue(event.target.value)} onKeyDown={handleEnter} placeholder="Add todo..." value={inputValue} className="w-96 h-full outline-none placeholder:text-black" />
        <AiFillPlusCircle className="text-green-700 text-2xl cursor-pointer" onClick={()=>addTodos()} />
      </div>
      <div className="">
        {todos.map((item)=>(
          <Todo key={item.id} id={item.id} complete={item.complete}>{item.inputValue}</Todo>
        ))}
      </div>
    </div>
  );
}

export default App;
