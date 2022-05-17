import { ShowAddTodo } from "../types";

export const AddTodo = ({ setShowAddTodo }: ShowAddTodo) => {
    return (
        <div>
            <button className="add-todo" onClick={() => setShowAddTodo(true)}>
                <i className="bi bi-plus-circle icon" title="Add new todo"/>
            </button>
        </div>
    );
};
