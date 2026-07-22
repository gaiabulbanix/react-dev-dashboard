import Button from "../../components/Button";

export default function WorkoutItem({ workout, index, onDeleteWorkout, onEditWorkout }) {
    return (
        <li>
            <div>
                {index + 1} - {workout.name} - {workout.reps} - {workout.date}
            </div>
            <div className="flex gap-1">
                <Button
                    onClick={() => onEditWorkout(workout)}
                >
                    Edit
                </Button>
                <Button
                    onClick={() => onDeleteWorkout(workout)}
                >
                    Delete
                </Button>
            </div>
        </li>
    );
}