import Button from "../../components/Button";

export default function WorkoutItem({ workout, index, onDeleteWorkout }) {
    return (
        <li>
            <div>
                {index + 1} - {workout.name} - {workout.reps} - {workout.date}
            </div>
            <div>
                <Button
                    onClick={() => onDeleteWorkout(workout)}
                >
                    Delete
                </Button>
            </div>
        </li>
    );
}