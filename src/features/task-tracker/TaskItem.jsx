import Button from "../../components/Button";

export default function TaskItem({ className = '', taskItem, index }) {
    return (
        <li className={`${className}`}>
            <div className="flex gap-4">
                <input
                    type="checkbox"
                />
                <div>
                    {index + 1} - {taskItem.task}
                </div>
            </div>

        </li>
    );
}