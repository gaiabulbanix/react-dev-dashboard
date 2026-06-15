import Header from "./Header";
import TaskTracker from "../features/task-tracker/TaskTracker";
import WorkoutTracker from "../features/workout-tracker/WorkoutTracker";

import { useState } from 'react';

export default function Dashboard() {
    // **hooks**
    const [activeFeature, setActiveFeature] = useState('taskTracker');

    // **handlers**
    const handleFeatureChange = (feature) => {
        setActiveFeature(feature);
    }

    return (
        <div className="p-8 min-h-screen bg-slate-900 text-slate-100">
            <Header
                onFeatureChange={handleFeatureChange}
            />
            {activeFeature === 'taskTracker' && <TaskTracker />}
            {activeFeature === 'workoutTracker' && <WorkoutTracker />}
        </div>
    );
};