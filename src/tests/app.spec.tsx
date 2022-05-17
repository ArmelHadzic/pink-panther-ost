import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

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

        expect(screen.getByTestId("todo0")).toBeTruthy();
        expect(screen.getByTestId("todo1")).toBeTruthy();
        expect(screen.getByTestId("todo2")).toBeTruthy();
    });

    it("first two items are marked as done", () => {
        render(<App />);
        expect(screen.getByText("Create To-Do app").closest("div")).toHaveClass('todo-done');
        expect(screen.getByText("Send it to Forsta").closest("div")).toHaveClass('todo-done');
    });

    it("third item is marked as not done", () => {
        render(<App />);
        expect(screen.getByText("Get an amazing offer").closest("div")).toHaveClass('todo');
    });

    it("button to add more todos is present", () => {
        render(<App />);
        expect(screen.getByTitle("Add new todo")).toBeDefined();
    });
});
