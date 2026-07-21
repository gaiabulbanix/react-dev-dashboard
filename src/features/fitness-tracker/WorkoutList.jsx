import WorkoutItem from "./WorkoutItem";

export default function WorkoutList({ workoutList, onDeleteWorkout }) {
    return (
        <ul>
            {workoutList.map((workout, index) => (
                <WorkoutItem
                    key={workout.id}
                    index={index}
                    workout={workout}
                    onDeleteWorkout={onDeleteWorkout}
                />
            ))}
        </ul>
    );
}