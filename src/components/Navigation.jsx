import Button from './Button';

export default function Navigation({ onFeatureChange }) {
    return (
        <div className="flex gap-2">
            <Button
                onClick={() => onFeatureChange('taskTracker')}
                btnStyle="secondary"
                btnSize="sm"
            >
                Tasks
            </Button>
            <Button
                onClick={() => onFeatureChange('fitnessTracker')}
                btnStyle="secondary"
                btnSize="sm"
            >
                Fitness
            </Button>
        </div>
    );
}