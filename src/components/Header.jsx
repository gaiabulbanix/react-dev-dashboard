import Panel from "./Panel";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <Panel className="flex gap-4">
            <h1>Development Dashboard</h1>
            <Navigation />
        </Panel>
    );
};