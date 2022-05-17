export type Todo = {
    text: string;
    done: boolean;
    edit: boolean;
};

export type Todos = Todo[];

export type TodoListProps = {
    todos: Todos;
    setTodos: React.Dispatch<React.SetStateAction<Todos>>;
};

export type TodoItem = {
    item: Todo;
    index: number;
    editTodo: (id: number, edit: boolean) => void;
    deleteTodo: (id: number) => void;
    doneTodo: (id: number, done: boolean) => void;
};

export type TodoItemEditMode = {
    item: Todo;
    index: number;
    editTodo: (id: number, edit: boolean) => void;
    updateTodo: (id: number) => void;
    updatedTodo: string;
    setUpdatedTodo: React.Dispatch<React.SetStateAction<string>>;
};

export type Input = {
    newTodo: string,
    setNewTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (todo: string) => void;
    setShowAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ShowAddTodo = {
    setShowAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
};