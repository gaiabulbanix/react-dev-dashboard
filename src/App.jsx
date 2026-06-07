import { useState } from 'react';

// **Color Scheme**
// -dark mode: bg-slate-900 text-slate-100
// -dark mode accent: border-teal-800
// -light mode: bg-slate-100 text-slate-900
// - primary: 'bg-slate-100 text-slate-900',
// - secondary: 'bg-slate-900 text-slate-100',
// - danger: 'bg-red-500 text-slate-900 font-bold',
// *use slightly lower/higher values where needed for contrast (200)

export default function App() {
  return (
    <div className="p-8 min-h-screen bg-slate-900 text-slate-100">
      <h1>Development Dashboard</h1>
    </div>
  );
};