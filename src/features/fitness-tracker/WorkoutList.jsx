import WorkoutItem from "./WorkoutItem";

export default function WorkoutList({ workoutList }) {
    return (
        <ul>
            {workoutList.map((workout, index) => (
                <WorkoutItem
                    key={workout.id}
                    index={index}
                    workout={workout}
                />
            ))}
        </ul>
    );
}