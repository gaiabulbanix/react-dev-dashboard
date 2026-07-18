import Panel from '../../components/Panel';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

import { useState, useEffect } from 'react';

export default function FitnessTracker() {
    // **hooks**
    const [workoutList, setWorkoutList] = useState(() => {
        const raw = localStorage.getItem('savedWorkouts');
        if (!raw) return [];

        try {
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            console.warn("Invalid JSON is in localStorage(savedWorkouts)");
            return [];
        };
    });

    useEffect(() => {
        localStorage.setItem('savedWorkouts', JSON.stringify(workoutList));
    }, [workoutList]);

    // **handlers**
    const handleAddWorkout = (workoutInputName, workoutInputReps) => {
        if (!workoutInputName.trim()) return;

        const dateNow = new Date().toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });

        setWorkoutList([...workoutList, {
            id: crypto.randomUUID(),
            name: workoutInputName,
            reps: workoutInputReps,
            date: dateNow
        }]);
    };

    return (
        <Panel className="max-w-3xl">
            <h2>Fitness Tracker</h2>
            <WorkoutForm
                onAddWorkout={handleAddWorkout}
            />
            <WorkoutList
                workoutList={workoutList}
            />
        </Panel>
    );
}