export default function WorkoutItem({ workout, index }) {
    return (
        <li>
            {index + 1} - {workout.name} - {workout.reps} - {workout.date}
        </li>
    );
}