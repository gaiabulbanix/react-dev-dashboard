import Button from '../../components/Button';

export default function TaskFilter({ className = '', onFilterTasks }) {
    return (
        <div className={`flex gap-4 ${className}`}>
            <Button
                type="button"
                onClick={() => onFilterTasks('all')}
            >
                All
            </Button>
            <Button
                type="button"
                onClick={() => onFilterTasks('complete')}
            >
                Completed
            </Button>
            <Button
                type="button"
                onClick={() => onFilterTasks('pending')}
            >
                Pending
            </Button>
        </div>
    );
}