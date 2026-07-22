import Button from "../../components/Button";

import { useState } from 'react';

export default function WorkoutItem({ workout, index, onDeleteWorkout, onEditWorkout }) {
    // **hooks**
    const [editMode, setEditMode] = useState(false);
    const [editInputName, setEditInputName] = useState('');
    const [editInputReps, setEditInputReps] = useState('');

    return (
        <li>
            {editMode
                ?
                <form
                    className="flex justify-between mt-2"
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
                            type="submit"
                            disabled={!editInputName.trim() || !editInputReps}
                        >
                            Save
                        </Button>
                        <Button
                            type="button"
                            onClick={() => { setEditMode(false); }}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
                : <>
                    <div>
                        {index + 1} - {workout.name} - {workout.reps} - {workout.date}
                    </div>
                    <div className="flex gap-1">
                        <Button
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
                            type="button"
                            onClick={() => onDeleteWorkout(workout)}
                        >
                            Delete
                        </Button>
                    </div>
                </>
            }
        </li>
    );
}