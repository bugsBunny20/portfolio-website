import React from 'react';

function App() {
return (
<div className="h-screen bg-zinc-900 text-white flex flex-col items-center justify-center">
<h1 className="text-2xl font-bold mb-4">Testing Scrollbar Plugin</h1>
<div className="h-48 w-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-zinc-700 border border-cyan-500 rounded-md p-2">
{[...Array(30)].map((_, i) => (
<p key={i}>Scrollable item {i + 1}</p>
))}
</div>
</div>
);
}

export default App;