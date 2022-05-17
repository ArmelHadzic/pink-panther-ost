import { TodoItemEditMode } from "../types";

export const TodoEditMode = ({ item, index, editTodo, updateTodo, updatedTodo, setUpdatedTodo }: TodoItemEditMode) => {
    return (
        <div className="todo">
            <input className="input" onChange={(e) => setUpdatedTodo(e.target.value)} defaultValue={item.text}/>
            <div>
                {updatedTodo &&
                    <button type="button" className="button" onClick={() => updateTodo(index)}>
                        <i className="bi bi-sd-card icon" title="Save"></i>
                    </button>
                }
                <button type="button" className="button" onClick={() => editTodo(index, false)}>
                    <i className="bi bi-x-square icon" title="Cancel"/>
                </button>
            </div>
        </div>
    );
};
