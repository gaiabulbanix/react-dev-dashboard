import Header from './Header';
import TaskTracker from '../features/task-tracker/TaskTracker';
import FitnessTracker from '../features/fitness-tracker/FitnessTracker';

import { useState } from 'react';

export default function Dashboard() {
    // **hooks**
    const [activeFeature, setActiveFeature] = useState('taskTracker');

    // **handlers**
    const handleFeatureChange = (feature) => {
        setActiveFeature(feature);
    };

    return (
        <div className="p-10 min-h-screen bg-slate-900 text-slate-100">
            <Header onFeatureChange={handleFeatureChange} />
            {activeFeature === 'taskTracker' && <TaskTracker className="mt-4 max-w-3xl" />}
            {activeFeature === 'fitnessTracker' && <FitnessTracker className="mt-4 max-w-3xl" />}
        </div>
    );
}
