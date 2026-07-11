import Button from '../../components/Button';

import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
    // **hooks**
    const [taskInput, setTaskInput] = useState('');

    return (
        <form
            className="flex gap-1"
            onSubmit={(e) => {
                e.preventDefault();
                onAddTask(taskInput);
                setTaskInput('');
            }}
        >
            <input
                className="rounded-sm p-1 text-slate-900"
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Please add a task..."

            />
            <Button
                type="submit"
                btnSize="sm"
                btnStyle="secondary"
            >
                Add
            </Button>
        </form>
    );
}