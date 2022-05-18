import { TodoItemEditMode } from "../types";

export const TodoEditMode = ({ item, index, editTodo, updateTodo, updatedTodo, setUpdatedTodo }: TodoItemEditMode) => {
    return (
        <div className="todo">
            <input data-testid='update-todo-input' className="input" onChange={(e) => setUpdatedTodo(e.target.value)} defaultValue={item.text}/>
            <div>
                {updatedTodo &&
                    <button type="button" data-testid='update-todo' className="button" onClick={() => updateTodo(index)}>
                        <i className="bi bi-sd-card icon" title="Update"></i>
                    </button>
                }
                <button type="button" data-testid='cancel-edit' className="button" onClick={() => editTodo(index, false)}>
                    <i className="bi bi-x-square icon" title="Cancel"/>
                </button>
            </div>
        </div>
    );
};
