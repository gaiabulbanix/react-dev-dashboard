import Panel from "./Panel";
import Navigation from "./Navigation";

export default function Header({ onFeatureChange, }) {
    return (
        <Panel className="flex gap-8 w-full max-w-3xl">
            <h1>Development Dashboard</h1>
            <Navigation onFeatureChange={onFeatureChange} />
        </Panel>
    );
};