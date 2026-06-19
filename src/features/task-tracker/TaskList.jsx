import TaskItem from "./TaskItem";

export default function TaskList({ className = '' }) {
    return (
        <ul className={`${className}`}>
            <TaskItem />
        </ul>
    );
}