import Button from '../../components/Button'
import { useState } from 'react';

export default function WorkoutForm() {
    const [workoutInput, setWorkoutInput] = useState('');

    return (
        <form>
            <input
                type="text"
                value={workoutInput}
            />
            <Button
                type="submit"
            >
                Add
            </Button>
        </form>
    );
}