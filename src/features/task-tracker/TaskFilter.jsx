import Button from '../../components/Button';

export default function TaskFilter({ onFilterTasks, taskFilter }) {
    return (
        <div className="flex gap-1">
            <Button
                type="button"
                onClick={() => onFilterTasks('all')}
                btnSize="sm"
                btnStyle={taskFilter === 'all' ? 'secondary' : 'primary'}
            >
                All
            </Button>
            <Button
                type="button"
                onClick={() => onFilterTasks('complete')}
                btnSize="sm"
                btnStyle={taskFilter === 'complete' ? 'secondary' : 'primary'}
            >
                Complete
            </Button>
            <Button
                type="button"
                onClick={() => onFilterTasks('pending')}
                btnSize="sm"
                btnStyle={taskFilter === 'pending' ? 'secondary' : 'primary'}
            >
                Pending
            </Button>
        </div>
    );
}