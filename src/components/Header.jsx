import Panel from "./Panel";
import Button from "./Button";

export default function Header() {
    return (
        <Panel className="flex gap-4">
            <h1>Development Dashboard</h1>
            <div className="flex gap-2">
                <button>Tasks</button>
                <button>Workouts</button>
            </div>
        </Panel>
    );
};