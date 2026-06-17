import Button from './Button';

export default function Navigation({ onFeatureChange }) {
    return (
        <div className="flex gap-6">
            <Button onClick={() => onFeatureChange('taskTracker')}>Tasks</Button>
            <Button onClick={() => onFeatureChange('fitnessTracker')}>Fitness</Button>
        </div>
    );
}