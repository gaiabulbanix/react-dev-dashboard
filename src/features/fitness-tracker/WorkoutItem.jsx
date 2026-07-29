import Button from "../../components/Button";

import { useState } from 'react';

export default function WorkoutItem({ workout, index, onDeleteWorkout, onEditWorkout }) {
    // **hooks**
    const [editMode, setEditMode] = useState(false);
    const [editInputName, setEditInputName] = useState('');
    const [editInputReps, setEditInputReps] = useState('');

    return (
        <li className="mt-2">
            {editMode
                ?
                <form
                    className="flex justify-between"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onEditWorkout(workout, editInputName, editInputReps);
                        setEditMode(false);
                    }}
                >
                    <div className="flex gap-2 text-slate-900">
                        <input
                            type="text"
                            value={editInputName}
                            onChange={(e) => setEditInputName(e.target.value)}
                        />
                        <input
                            type="number"
                            value={editInputReps}
                            onChange={(e) => setEditInputReps(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-1">
                        <Button
                            btnSize="xs"
                            type="submit"
                            disabled={!editInputName.trim() || !editInputReps}
                        >
                            Save
                        </Button>
                        <Button
                            btnSize="xs"
                            type="button"
                            onClick={() => { setEditMode(false); }}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
                :
                <div className="flex justify-between">
                    <div className="flex items-center">
                        {index + 1} - {workout.name} - {workout.reps}x
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="text-slate-400 mr-1">
                            {workout.date}
                        </div>
                        <Button
                            btnSize="xs"
                            type="button"
                            onClick={() => {
                                setEditMode(true);
                                setEditInputName(workout.name);
                                setEditInputReps(workout.reps);
                            }}
                        >
                            Edit
                        </Button>
                        <Button
                            btnSize="xs"
                            type="button"
                            onClick={() => onDeleteWorkout(workout)}
                            btnStyle="danger"
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            }
        </li>
    );
}