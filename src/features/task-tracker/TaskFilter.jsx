import Button from '../../components/Button';

export default function TaskFilter({ className = '' }) {
    return (
        <div className={`flex gap-4 ${className}`}>
            <Button>
                All
            </Button>
            <Button>
                Completed
            </Button>
            <Button>
                Pending
            </Button>
        </div>
    );
}