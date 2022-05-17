import { useState } from "react";

import { Todo } from './todo';
import { TodoEditMode } from "./todoEditMode";
import { TodoInput } from "./todoInput";
import { AddTodo } from "./addTodo";
import { TodoListProps } from "../types";

export const TodoList = ({ todos, setTodos }: TodoListProps) => {
    const [showAddTodo, setShowAddTodo] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>('');
    const [updatedTodo, setUpdatedTodo] = useState<string>('');

    const addTodo = (todo: string): void => {
        setTodos( [
            {
                text: todo,
                done: false,
                edit: false
            },
            ...todos
        ])
        setShowAddTodo(false);
        setNewTodo('');
    };
  
    const editTodo = (id: number, edit: boolean): void => {
        const updatedTodos = [ ...todos ];
        updatedTodos[id] = { ...updatedTodos[id], edit };
        setTodos(updatedTodos);
    }

    const updateTodo = (id: number): void => {
        const updatedTodos = [ ...todos ];
        updatedTodos[id] = { ...updatedTodos[id], text: updatedTodo, edit: false };
        setTodos(updatedTodos);
        setUpdatedTodo("");
    }

    const deleteTodo = (id: number): void => {
        const updatedTodos = [ ...todos ];
        updatedTodos.splice(id, 1);
        setTodos(updatedTodos);
    }

    const doneTodo = (id: number, done: boolean): void => {
        const updatedTodos = [ ...todos ];
        updatedTodos[id] = { ...updatedTodos[id], done, edit: false };
        setTodos(updatedTodos);
    }

    return (
        <div className="todoList">
            <AddTodo setShowAddTodo={setShowAddTodo}/>
            
            {showAddTodo && 
                <TodoInput
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    addTodo={addTodo}
                    setShowAddTodo={setShowAddTodo}
                />
            }

            {todos.map((item, i) => (
                <div key={i}>
                    {item.edit ?
                        <TodoEditMode
                            item={item}
                            index={i}
                            editTodo={editTodo}
                            updateTodo={updateTodo}
                            updatedTodo={updatedTodo}
                            setUpdatedTodo={setUpdatedTodo}
                        /> :
                        <Todo
                            item={item}
                            index={i}
                            editTodo={editTodo}
                            deleteTodo={deleteTodo}
                            doneTodo={doneTodo}
                        />
                    }
                </div>
            ))}
        </div>
    );
};
