import Panel from '../../components/Panel';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import Button from '../../components/Button';

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
        if (!workoutInputName.trim() || !workoutInputReps) return;

        const dateNow = new Date().toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });

        setWorkoutList([...workoutList, {
            id: crypto.randomUUID(),
            name: workoutInputName,
            reps: workoutInputReps,
            date: dateNow
        }]);
    };

    const handleDeleteWorkout = (targetWorkout) => {
        if (!window.confirm("Are you sure you want to delete this workout?")) {
            return;
        };

        setWorkoutList(workoutList.filter((workout) => workout.id !== targetWorkout.id));
    };

    const handleEditWorkout = (targetWorkout, workoutInputName, workoutInputReps) => {
        if (!workoutInputName.trim() || !workoutInputReps) return;

        setWorkoutList(workoutList.map((workout) =>
            workout.id === targetWorkout.id
                ? { ...workout, name: workoutInputName, reps: workoutInputReps }
                : workout
        ));
    };

    const handleDeleteAllWorkout = () => {
        if (!window.confirm("Are you sure you want to delete all workouts?")) {
            return;
        };
        setWorkoutList([]);
    }

    return (
        <Panel className="max-w-3xl">
            <h2>Fitness Tracker</h2>
            <WorkoutForm
                onAddWorkout={handleAddWorkout}
            />
            <WorkoutList
                workoutList={workoutList}
                onDeleteWorkout={handleDeleteWorkout}
                onEditWorkout={handleEditWorkout}
            />
            <div className="mt-4 flex justify-end">
                <Button
                    onClick={handleDeleteAllWorkout}
                    btnStyle="danger"
                    btnSize="md"
                    disabled={workoutList.length <= 0}
                >
                    Delete All Workouts
                </Button>
            </div>

        </Panel>
    );
}