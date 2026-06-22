import TaskItem from "./TaskItem";

export default function TaskList({ className = '', taskList, onToggleTask }) {
    return (
        <ul className={`${className}`}>
            {taskList.map((task, index) =>
                <TaskItem
                    key={task.id}
                    index={index}
                    task={task}
                    onToggleTask={onToggleTask}
                />
            )}
        </ul>
    );
}