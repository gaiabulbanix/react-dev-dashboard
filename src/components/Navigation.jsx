import Button from "./Button";

export default function Navigation({ onFeatureChange }) {
    return (
        <div className="flex gap-4">
            <Button
                onClick={() => onFeatureChange('taskTracker')}
            >
                Tasks
            </Button>
            <Button
                onClick={() => onFeatureChange('workoutTracker')}
            >
                Workouts
            </Button>
        </div>
    );
};