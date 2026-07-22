import WorkoutItem from "./WorkoutItem";

export default function WorkoutList({ workoutList, onDeleteWorkout, onEditWorkout }) {
    return (
        <ul>
            {workoutList.map((workout, index) => (
                <WorkoutItem
                    key={workout.id}
                    index={index}
                    workout={workout}
                    onDeleteWorkout={onDeleteWorkout}
                    onEditWorkout={onEditWorkout}
                />
            ))}
        </ul>
    );
}