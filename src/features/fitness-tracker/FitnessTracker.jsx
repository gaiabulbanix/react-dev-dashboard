import Panel from '../../components/Panel';
import WorkoutForm from './WorkoutForm';

import { useState } from 'react';

export default function FitnessTracker() {
    return (
        <Panel className="max-w-3xl">
            <h2>Fitness Tracker</h2>
            <WorkoutForm />
        </Panel>
    );
}