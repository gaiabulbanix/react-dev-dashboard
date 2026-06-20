export default function TaskItem({ className = '', taskItem, index }) {
    return (
        <li className={`${className}`}>
            {index + 1} - {taskItem.task}
        </li>
    );
}