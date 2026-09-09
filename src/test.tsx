import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar - Fixed height */}
      <aside className="hidden md:block h-screen overflow-y-hidden bg-gray-800 text-center text-white lg:text-left flex-shrink-0">
        <div className="p-5">
          <a href="/" className="flex gap-5">
            <img src="../assets/react.svg" className="w-10 h-10" alt="Logo" />
            <h1 className="text-2xl font-bold tracking-widest">Al-Ma'wa</h1>
          </a>
        </div>
        <nav>
          <h2 className="text-xl font-mono">Lectures</h2>
          <ul className="p-2 flex flex-col gap-1 mt-4">
            {/* Sidebar Links */}
          </ul>
          <h2 className="text-xl font-mono mt-8">Libraries</h2>
          <ul className="p-2 flex flex-col gap-1 mt-4">
            {/* Sidebar Links */}
          </ul>
        </nav>
      </aside>

      {/* Main Content - Scrollable */}
      <main className="flex-1 min-h-screen overflow-y-auto p-4 bg-gray-100">
        <header className="bg-gray-800/70 w-full shadow-sm py-4 sticky top-0 z-10 text-white text-center">
          Al-Ma'wa Header
        </header>
        <div>
          <p>Main content here. Add enough content to make it scrollable.</p>
          {Array.from({ length: 100 }).map((_, i) => (
            <p key={i}>Scrollable content line {i + 1}</p>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;