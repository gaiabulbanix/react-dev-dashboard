import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import Panel from '../../components/Panel';

export default function TaskTracker({ className = '', }) {
    return (
        <Panel className={`${className}`}>
            <h2>Task Tracker</h2>
            <div className="flex gap-2">
                <TaskForm />
                <TaskFilter />
            </div>
            <div>
                TaskList and TaskItems
            </div>
        </Panel>
    );
};