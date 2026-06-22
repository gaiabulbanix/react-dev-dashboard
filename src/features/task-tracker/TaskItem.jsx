import Button from "../../components/Button";

export default function TaskItem({ className = '', task, index, onToggleTask }) {
    return (
        <li className={`${className}`}>
            <div className="flex gap-4">
                <div>
                    {index + 1} - {task.name} - {task.complete ? "Complete" : "Pending"}
                </div>
                <input
                    type="checkbox"
                    checked={task.complete}
                    onChange={() => onToggleTask(task)}
                />
            </div>
        </li>
    );
}