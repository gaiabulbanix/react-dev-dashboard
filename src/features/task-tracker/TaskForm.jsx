import { useState } from "react";
import Button from "../../components/Button";
export default function TaskForm({ className = '', onAddTask }) {
    // **hooks**
    const [taskInput, setTaskInput] = useState('');

    return (
        <form
            className={`${className}`}
            onSubmit={(e) => {
                e.preventDefault();
                onAddTask(taskInput);
                setTaskInput('');
            }}>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <Button
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
}