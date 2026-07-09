import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import Panel from '../../components/Panel';
import Button from '../../components/Button';

import { useState, useEffect } from 'react';

export default function TaskTracker({ className = '', }) {
    // **hooks**
    const [taskList, setTaskList] = useState(() => {
        const raw = localStorage.getItem('savedTasks');
        if (!raw) return [];

        try {
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            console.warn("Invalid JSON in localStorage (savedTasks)");
            return [];
        };
    });

    useEffect(() => {
        localStorage.setItem('savedTasks', JSON.stringify(taskList));
    }, [taskList])

    const [taskFilter, setTaskFilter] = useState('all')

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

    const handleEditTask = (targetTask, taskInput) => {
        if (!taskInput.trim()) return;
        setTaskList(taskList.map((task) =>
            task.id === targetTask.id
                ? { ...task, name: taskInput.trim() }
                : task
        ));
    };

    const handleFilterTasks = (filter) => {
        setTaskFilter(filter);
    };

    const handleClearCompleted = () => setTaskList(taskList.filter((task) => !task.complete));

    return (
        <Panel className={className}>
            <h2>Task Tracker</h2>
            <div className="flex gap-2">
                <TaskForm
                    onAddTask={handleAddTask}
                />
                <TaskFilter
                    onFilterTasks={handleFilterTasks}
                />
            </div>
            <div>
                <TaskList
                    taskList={taskList}
                    taskFilter={taskFilter}
                    onToggleTask={handleToggleTask}
                    onDeleteTask={handleDeleteTask}
                    onEditTask={handleEditTask}
                />
                <div>
                    <Button
                        type="button"
                        onClick={handleDeleteAllTasks}
                        btnStyle="secondary"
                        btnSize="md"
                    >
                        Delete All Tasks
                    </Button>
                    <Button
                        type="button"
                        onClick={handleClearCompleted}
                    >
                        Clear All Completed
                    </Button>
                </div>
            </div>
        </Panel >
    );
}