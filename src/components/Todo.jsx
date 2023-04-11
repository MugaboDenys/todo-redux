import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../features/todos";

const Todo = ({children, id, complete}) => {
    const dispatch = useDispatch();
        
    return ( 
        <div className="flex justify-between group w-[32rem] py-2 pl-2 mt-5 border-b-2">
            <div className="flex gap-x-2">
                {console.log(id)}
                <input type="checkbox" id={id} onChange={()=>dispatch(toggleComplete({id}))} checked={complete} />
                <label htmlFor={id} className={`${complete && "line-through"}`}>{children}</label>
            </div>
            <MdDelete className="text-red-600 cursor-pointer " onClick={()=>dispatch(deleteTodo({id}))} />
        </div>
     );
}
 
export default Todo;