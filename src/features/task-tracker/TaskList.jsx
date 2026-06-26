import TaskItem from './TaskItem';

export default function TaskList({ className = '', taskList, onToggleTask, onDeleteTask, onEditTask, taskFilter }) {
    // **derived**
    let filteredTasks;
    taskFilter === 'complete'
        ? filteredTasks = taskList.filter((task) => task.complete)
        : taskFilter === 'pending'
            ? filteredTasks = taskList.filter((task) => !task.complete)
            : filteredTasks = taskList

    return (
        <ul className={`${className}`}>
            {filteredTasks.map((task, index) =>
                <TaskItem
                    key={task.id}
                    index={index}
                    task={task}
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                />
            )}
        </ul>
    );
}