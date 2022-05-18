import App from "../App";
import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { TodoInput } from "../components/todoInput";

describe("TodoApp", () => {
    it("renders app", () => {
        const app = render(<App />);
        expect(app).not.toBeUndefined();
    });

    it("renders initial items", () => {
        render(<App />);
        expect(screen.getByText("Create To-Do app")).toBeDefined();
        expect(screen.getByText("Send it to Forsta")).toBeDefined();
        expect(screen.getByText("Get an amazing offer")).toBeDefined();
    });

    it("first two items are marked as done and third as not done", () => {
        render(<App />);
        expect(screen.getByText("Create To-Do app").closest("div")).toHaveClass('todo-done');
        expect(screen.getByText("Send it to Forsta").closest("div")).toHaveClass('todo-done');
        expect(screen.getByText("Get an amazing offer").closest("div")).toHaveClass('todo');
    });

    it("button to add more todos is present", () => {
        render(<App />);
        expect(screen.getByTitle("Add new todo")).toBeDefined();
    });

    it('add new todo is working', () => {
        render(<App />);
        userEvent.click(screen.getByTitle("Add new todo"));
        expect(screen.getByTestId("add-new-todo-input")).toBeDefined();

        userEvent.type(screen.getByTestId("add-new-todo-input"), 'New todo text');
        fireEvent.click(screen.getByTestId("save-new-todo"));
    })

    it('marking todo as done is working', () => {
        render(<App />);
        const activeTodo = screen.getByTestId("todo2");
        const markButton = within(activeTodo).getByTestId("mark-todo")
        userEvent.click(markButton);
        expect(screen.getByText("Get an amazing offer").closest("div")).toHaveClass('todo-done');
    })

    it('mark as not done and enter edit mode', () => {
        render(<App />);
        const todo = screen.getByTestId("todo1");
        const markButton = within(todo).getByTestId("mark-todo")
        userEvent.click(markButton);
        expect(screen.getByText("Get an amazing offer").closest("div")).toHaveClass('todo');

        const editButton = within(todo).getByTestId("edit-todo")
        userEvent.click(editButton);

        expect(screen.getByTestId('update-todo-input')).toBeDefined();
    })
});
