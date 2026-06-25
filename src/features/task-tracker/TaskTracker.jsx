import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import Panel from '../../components/Panel';
import Button from '../../components/Button';

import { useState } from 'react';

export default function TaskTracker({ className = '', }) {
    // **hooks**
    const [taskList, setTaskList] = useState([]);

    // **handlers**
    const handleAddTask = (taskInput) => {
        if (!taskInput.trim()) return;
        setTaskList([...taskList, {
            id: crypto.randomUUID(),
            name: taskInput,
            complete: false
        }]);
    };

    const handleToggleTask = (targetTask) =>
        setTaskList(taskList.map((task) =>
            task.id === targetTask.id
                ? { ...task, complete: !task.complete }
                : task
        ));

    const handleDeleteTask = (targetTask) =>
        setTaskList(taskList.filter((task) =>
            task.id !== targetTask.id
        ));

    const handleDeleteAllTasks = () => setTaskList([]);

    const handleEditTask = (targetTask, taskInput) =>
        setTaskList(taskList.map((task) =>
            task.id === targetTask.id
                ? { id: task.id, name: taskInput, complete: task.complete }
                : task
        ));

    return (
        <Panel className={`${className}`}>
            <h2>Task Tracker</h2>
            <div className="flex gap-2">
                <TaskForm
                    onAddTask={handleAddTask}
                />
                <TaskFilter />
            </div>
            <div>
                <TaskList
                    taskList={taskList}
                    onToggleTask={handleToggleTask}
                    onDeleteTask={handleDeleteTask}
                    onEditTask={handleEditTask}
                />
                <Button
                    type="Button"
                    onClick={handleDeleteAllTasks}
                >
                    Delete All Tasks
                </Button>
            </div>
        </Panel>
    );
}