import Button from '../../components/Button'
import { useState } from 'react';

export default function WorkoutForm({ onAddWorkout }) {
    // **hooks*
    const [workoutInputName, setWorkoutInputName] = useState('');
    const [workoutInputReps, setWorkoutInputReps] = useState('');

    return (
        <form className="flex gap-1 text-slate-900 mt-2"
            onSubmit={(e) => {
                e.preventDefault();
                onAddWorkout(workoutInputName, workoutInputReps);
                setWorkoutInputName('');
                setWorkoutInputReps('');
            }}
        >
            <input
                type="text"
                className="rounded-sm p-1 text-slate-900"
                value={workoutInputName}
                onChange={(e) => setWorkoutInputName(e.target.value)}
                placeHolder="Add a workout here..."
            />
            <input
                type="number"
                className="rounded-sm p-1 text-slate-900 w-11"
                min="1"
                step="1"
                value={workoutInputReps}
                onChange={(e) => {
                    const value = e.target.value;

                    if (value === "") {
                        setWorkoutInputReps("");
                        return;
                    };

                    const reps = Number(value);

                    if (reps >= 1 && reps <= 99) {
                        setWorkoutInputReps(reps);
                    };
                }}
                placeholder="1"
            />
            <Button
                type="submit"
                btnSize="sm"
                btnStyle="secondary"
                disabled={!workoutInputName.trim() || !workoutInputReps}
            >
                Add
            </Button>
        </form>
    );
}