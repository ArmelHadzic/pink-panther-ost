import { TodoItem } from "../types";

export const Todo = ({ item, index, editTodo, deleteTodo, doneTodo }: TodoItem) => {
    return (
        <div className={item.done ? "todo-done" : 'todo'}>
            <span data-testid={`todo${index}`}>{item.text}</span>
            <div className="todo-buttons">
                {!item.done &&
                    <button type="button" className="button" onClick={() => editTodo(index, true)}>
                        <i className="bi bi-pencil-square icon" title="Edit"/>
                    </button>
                }
                <button type="button" className="button" onClick={() => deleteTodo(index)}>
                    <i className="bi bi-trash icon" title="Delete"/>
                </button>
                <button type="button" className="button" onClick={() => doneTodo(index, !item.done)}>
                    {!item.done ?
                        <i className="bi bi-check2-square icon" title="Mark as done"/> :
                        <i className="bi bi-x-square icon" title="Mark as not done"/>
                    }
                </button>
            </div>
        </div>
    );
};
