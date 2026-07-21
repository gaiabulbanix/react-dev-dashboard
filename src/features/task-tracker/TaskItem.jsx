import Button from '../../components/Button';

import { useState } from 'react';

export default function TaskItem({ task, index, onToggleTask, onDeleteTask, onEditTask }) {
    // **hooks**
    const [editMode, setEditMode] = useState(false);
    const [editInput, setEditInput] = useState('');

    return (
        <li className="mt-2">
            {editMode
                ?
                <form
                    className="flex justify-between"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onEditTask(task, editInput);
                        setEditMode(false);
                    }}
                >
                    <input
                        className="rounded-sm text-slate-900 px-1 py-0.5"
                        type="text"
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                    />
                    <div className="flex gap-1">
                        <Button
                            btnSize="xs"
                            type="submit"
                            btnStyle="success"
                            disabled={!editInput.trim()}
                        >
                            Save
                        </Button>
                        <Button
                            btnSize="xs"
                            type="button"
                            onClick={() => setEditMode(false)}
                        >
                            Cancel
                        </Button>
                    </div>

                </form>
                :
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <input
                            type="checkbox"
                            checked={task.complete}
                            onChange={() => onToggleTask(task)}
                        />
                        <div>
                            {index + 1} -
                        </div>
                        <div className={task.complete ? 'text-green-500 line-through' : 'text-slate-100'}
                        >
                            {task.name}
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="text-slate-400 mr-1">
                            {task.date}
                        </div>
                        <Button
                            type="button"
                            onClick={() => {
                                setEditMode(true);
                                setEditInput(task.name);
                            }}
                            btnSize="xs"
                            btnStyle="primary"
                        >
                            Edit
                        </Button>
                        <Button
                            type="button"
                            onClick={() => onDeleteTask(task)}
                            btnSize="xs"
                            btnStyle="danger"
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            }
        </li >
    );
}