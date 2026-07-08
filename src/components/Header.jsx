import Panel from './Panel';
import Navigation from './Navigation';

export default function Header({ onFeatureChange }) {
    return (
        <div className="p-4 flex border-b-2 border-teal-800 bg-slate-700 items-center gap-8">
            <h1>Development Dashboard</h1>
            <Navigation onFeatureChange={onFeatureChange} />
        </div>
    );
}