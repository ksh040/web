import Checkbox from "./html/Checkbox"
import Button from "./html/Button"
import SvgPencill from "./svg/SvgPencill"
import SvgClose from "./svg/SvgClose"
import Input from "./html/Input"
import { useState } from "react"

export default function TodoListItem({ todo, toggleTodo, deleteTodo, modifyTodo, }: {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    modifyTodo: (id: number,title:string) => void;
}) {
    const [isModify, setIsModify] = useState(false);
    const [modifyTitle, setModifyTitle] = useState('');
    const modifyHandler = ()=>{
        setIsModify((modify)=>!modify)
        setModifyTitle(modifyTitle === ''?todo.title:modifyTitle);
        if(modifyTitle.trim()!==''&& modifyTitle !== todo.title){
            modifyTodo(todo.id,modifyTitle);
        }
    }
    return (
        <>
            <li className={`todo__item ${todo.done && 'todo__item--complete'}`}>
                {
                    !isModify && (
                        <Checkbox parentClassName='todo__checkbox-group'
                            type="checkbox" className="todo__checkbox"
                            checked={todo.done} onChange={() => toggleTodo(todo.id)}>
                            {todo.title}
                        </Checkbox>
                    )
                }
                {/* <!-- 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) --> */}
                {
                    isModify &&(
                        <Input type="text" className="todo__modify-input" value={modifyTitle} onChange={(e)=>setModifyTitle(e.target.value)}/>
                    )
                }
                {/* <!-- <input type="text" className="todo__modify-input" /> --> */}
                <div className="todo__button-group">
                    <Button className="todo__action-button" onClick={modifyHandler}>
                        <SvgPencill />
                    </Button>
                    <Button className="todo__action-button" onClick={() => deleteTodo(todo.id)}>
                        <SvgClose />
                    </Button>
                </div>
            </li>
            {/* <li className="todo__item todo__item--complete">
                <Input type="text" className="todo__modify-input" />
                <div className="todo__button-group">
                    <Button className="todo__action-button">
                        <SvgPencill />
                    </Button>
                    <Button className="todo__action-button">
                        <SvgClose />
                    </Button>
                </div>
            </li> */}
        </>
    )
}