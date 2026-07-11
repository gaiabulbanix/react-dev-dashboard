import Button from './Button';

export default function Navigation({ onFeatureChange, activeFeature }) {
    return (
        <div className="flex gap-2">
            <Button
                onClick={() => onFeatureChange('taskTracker')}
                btnStyle={activeFeature === 'taskTracker' ? 'secondary' : 'primary'}
                btnSize="md"
            >
                Tasks
            </Button>
            <Button
                onClick={() => onFeatureChange('fitnessTracker')}
                btnStyle={activeFeature === 'fitnessTracker' ? 'secondary' : 'primary'}
                btnSize="md"
            >
                Fitness
            </Button>
        </div>
    );
}