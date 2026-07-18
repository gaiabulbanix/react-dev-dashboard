import Button from '../../components/Button'
import { useState } from 'react';

export default function WorkoutForm(onAddWorkout) {
    // **hooks*
    const [workoutInputName, setWorkoutInputName] = useState('');
    const [workoutInputReps, setWorkoutInputReps] = useState('');

    return (
        <form className="flex gap-2"
            onSubmit={() => onAddWorkout(workoutInputName, workoutInputReps)}
        >
            <input
                type="text"
                value={workoutInputName}
                onChange={(e) => setWorkoutInputName(e.target.value)}
            />
            <input
                type="number"
                value={workoutInputReps}
                onChange={(e) => setWorkoutInputReps(e.target.value)}
            />
            <Button
                type="submit"
            >
                Add
            </Button>
        </form>
    );
}