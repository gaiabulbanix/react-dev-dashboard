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
            {filteredTasks.length
                ? filteredTasks.map((task, index) =>
                    <TaskItem
                        key={task.id}
                        index={index}
                        task={task}
                        onToggleTask={onToggleTask}
                        onDeleteTask={onDeleteTask}
                        onEditTask={onEditTask}
                    />
                )
                : taskFilter === 'all'
                    ? 'No tasks added yet - add one now!'
                    : 'No tasks match this filter currently...'
            }
        </ul>
    );
}