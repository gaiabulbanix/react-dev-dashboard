import Panel from "./Panel";
import Button from "./Button";

export default function Navigation() {
    return (
        <div className="flex gap-2">
            <button>Tasks</button>
            <button>Workouts</button>
        </div>
    );
};