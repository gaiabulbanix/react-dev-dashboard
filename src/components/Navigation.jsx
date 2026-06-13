import Panel from "./Panel";
import Button from "./Button";

export default function Navigation({ onFeatureChange }) {
    return (
        <div className="flex gap-4">
            <button
                onClick={() => onFeatureChange('taskTracker')}
            >
                Tasks
            </button>
            <button
                onClick={() => onFeatureChange('workoutTracker')}
            >
                Workouts
            </button>
        </div>
    );
};