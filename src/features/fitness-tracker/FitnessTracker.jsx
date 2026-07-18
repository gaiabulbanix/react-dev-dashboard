import Panel from '../../components/Panel';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

import { useState, useEffect } from 'react';

export default function FitnessTracker() {
    // **hooks**
    const [workoutList, setWorkList] = useState(() => {
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

    return (
        <Panel className="max-w-3xl">
            <h2>Fitness Tracker</h2>
            <WorkoutForm />
            <WorkoutList />
        </Panel>
    );
}