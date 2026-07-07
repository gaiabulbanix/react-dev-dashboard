export default function Button({ className = '', onClick, children, btnStyle = "primary", btnSize = "md", disabled = false }) {
    const btnStyles = {
        primary: 'bg-slate-100 text-slate-900 hover:bg-slate-400',
        secondary: 'bg-slate-900 text-slate-100 hover:bg-slate-800',
        disabled: 'bg-slate-400 text-slate-900 cursor-not-allowed opacity-50',
        danger: 'bg-red-500 text-slate-900 font-bold hover:bg-red-700',
        success: 'bg-green-500 text-slate-900 hover:bg-green-600'
    };

    const btnSizes = {
        xs: 'px-1 py-0.5',
        sm: 'px-2 py-1',
        md: 'px-3 py-1.5',
    };

    const setStyle = disabled ? 'disabled' : btnStyle;

    return (
        <button className={`${btnStyles[btnStyle]} ${btnSizes[btnSize]} rounded-md font-medium ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
