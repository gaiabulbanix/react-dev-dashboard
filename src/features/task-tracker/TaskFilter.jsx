import Button from "../../../../react-onboarding-projects-v3/r16-task-tracker/src/components/Button";

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