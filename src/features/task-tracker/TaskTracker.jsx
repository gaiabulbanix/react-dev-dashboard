import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import Panel from '../../components/Panel';

import { useState } from 'react';

export default function TaskTracker({ className = '', }) {
    // **hooks**
    const [taskList, setTaskList] = useState([]);

    // **handlers**
    const handleAddTask = (taskInput) =>
        setTaskList([...taskList, {
            id: crypto.randomUUID(),
            name: taskInput,
            complete: false
        }]);

    const handleToggleTask = (targetTask) =>
        setTaskList(taskList.map((task) =>
            task.id === targetTask.id
                ? { ...task, complete: !task.complete }
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
                />
            </div>
        </Panel>
    );
}