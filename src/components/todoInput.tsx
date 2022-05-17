import { Input } from "../types";

export const TodoInput = ({ newTodo, setNewTodo, addTodo, setShowAddTodo }: Input) => {
    return (
        <div className="todo">
            <input className="input"  onChange={(e) => setNewTodo(e.target.value)}/>
            <div>
                <button type="button" disabled={!newTodo} className="button" onClick={() => addTodo(newTodo)}>
                    <i className="bi bi-sd-card icon" title="Save"></i>
                </button>
                <button type="button" className="button" onClick={() => setShowAddTodo(false)}>
                    <i className="bi bi-x-square icon" title="Cancel"/>
                </button>
            </div>
        </div>
    );
};
