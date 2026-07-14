import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import Panel from '../../components/Panel';
import Button from '../../components/Button';

import { useState, useEffect } from 'react';

export default function TaskTracker() {
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
            complete: false,
            date: dateNow
        }]);
    };

    const handleToggleTask = (targetTask) =>
        setTaskList(taskList.map((task) =>
            task.id === targetTask.id
                ? { ...task, complete: !task.complete }
                : task
        ));

    const handleDeleteTask = (targetTask) => {
        if (!window.confirm("Are you sure you want to delete this task?")) {
            return;
        };
        setTaskList(taskList.filter((task) =>
            task.id !== targetTask.id
        ));
    };


    const handleDeleteAllTasks = () => {
        if (!window.confirm("Are you sure you want to delete all tasks?")) {
            return;
        };
        setTaskList([]);
    };

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

    const handleClearCompleted = () => {
        if (!window.confirm("Are you sure you want to clear all completed tasks?")) {
            return;
        };
        setTaskList(taskList.filter((task) => !task.complete));
    }

    // **derived values**
    const dateNow = new Date().toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    });

    return (
        <Panel className="max-w-3xl">
            <h2>Task Tracker</h2>
            <div className="flex justify-between mt-2">
                <TaskForm
                    onAddTask={handleAddTask}
                />
                <TaskFilter
                    onFilterTasks={handleFilterTasks}
                    taskFilter={taskFilter}
                />
            </div>
            <div className="mt-4">
                <TaskList
                    taskList={taskList}
                    taskFilter={taskFilter}
                    onToggleTask={handleToggleTask}
                    onDeleteTask={handleDeleteTask}
                    onEditTask={handleEditTask}
                />
            </div>
            <div className="flex justify-end gap-1 mt-4">
                <Button
                    type="button"
                    onClick={handleDeleteAllTasks}
                    btnStyle="danger"
                    btnSize="md"
                    disabled={taskList.length <= 0}
                >
                    Delete All Tasks
                </Button>
                <Button
                    type="button"
                    onClick={handleClearCompleted}
                    btnStyle="success"
                    btnSize="md"
                    disabled={taskList.filter((task) => task.complete).length <= 0}
                >
                    Clear All Completed
                </Button>
            </div>
        </Panel >
    );
}