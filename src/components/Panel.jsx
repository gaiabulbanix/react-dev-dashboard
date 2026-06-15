export default function Panel({ className = '', children, }) {
    return (
        <div className={`border-2 p-6 rounded-xl border-teal-800 bg-slate-700 ${className}`}>
            {children}
        </div>
    );
};