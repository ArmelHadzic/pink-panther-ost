import { useState, useEffect } from "react";

import { TodoList } from "./components/todoList";
import { Todos } from "./types";

import "./styles.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App() {
    const [todos, setTodos] = useState<Todos>([
        { text: "Create To-Do app", done: true, edit: false },
        { text: "Send it to Forsta", done: true, edit: false },
        { text: "Get an amazing offer", done: false, edit: false },
    ]);
   
    return (
        <div className="todo-list-app">
            <div className="panther"></div>
            <div className="content">
                <div className="forsta-logo"/>
                <div className="title">
                    Pink Panther OST
                    (todo todo <i className="bi bi-music-note-beamed"></i>)
                </div>
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
        </div>
    );
}
