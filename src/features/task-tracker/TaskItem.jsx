import Button from '../../components/Button';

import { useState } from 'react';

export default function TaskItem({ className = '', task, index, onToggleTask, onDeleteTask, onEditTask }) {
    // **hooks**
    const [editMode, setEditMode] = useState(false);
    const [editInput, setEditInput] = useState('');

    return (
        <li className={`${className}`}>
            {editMode
                ?
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onEditTask(task, editInput);
                        setEditMode(false);
                    }}
                >
                    <input
                        type="text"
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                    />
                    <Button
                        type="submit"
                    >
                        Save
                    </Button>
                    <Button
                        type="button"
                        onClick={() => setEditMode(false)}
                    >
                        Cancel
                    </Button>
                </form>
                :
                <div className="flex gap-4">
                    <div>
                        {index + 1} - {task.name} - {task.complete ? "Complete" : "Pending"}
                    </div>
                    <input
                        type="checkbox"
                        checked={task.complete}
                        onChange={() => onToggleTask(task)}
                    />
                    <Button
                        type="button"
                        onClick={() => {
                            setEditMode(true);
                            setEditInput(task.name);
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        type="button"
                        onClick={() => onDeleteTask(task)}
                    >
                        Delete
                    </Button>
                </div>
            }
        </li>
    );
}