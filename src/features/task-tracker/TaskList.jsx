import TaskItem from "./TaskItem";

export default function TaskList({ className = '', taskList, }) {
    return (
        <ul className={`${className}`}>
            {taskList.map((taskItem, index) => (
                <TaskItem
                    key={index}
                    index={index}
                    taskItem={taskItem}
                />
            ))}
        </ul>
    );
}