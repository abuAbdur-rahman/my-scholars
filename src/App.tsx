// App.tsx

// Import Core Modules
import { Link, Route, Routes } from "react-router-dom";

// Import Components
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Home from "./(root)";
import Play from "./(root)/play";
import New from "./(root)/New";
import Public from "./(root)/Public";
import Genre from "./(root)/Genre";
import Playlist from "./(root)/PlayList";
import Video from "./(root)/Video";
import Favorite from "./(root)/favorite";
import Downloaded from "./(root)/downloaded";
import History from "./(root)/History";
import Search from "./components/Search";
import Nav from "./components/Nav";

// Main App Component
const App = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row gap-4">
      
      {/* Medium and Desktop Sidebar */}
      <>
      <Sidebar />
      </>

      {/* Header for Mobile and Tablet */}
      <header className="bg-gray-800/70 w-full shadow-sm sm:hidden py-4 sticky top-0 z-10 center gap-5 p-4">
        <Link to="/" className="text-white">Al-Ma'wa</Link>
        <div className="flex-1">
          <Search />
        </div>
        <div> <MobileNav /> </div>
      </header>

      {/* Main Routes */}
      <main className="flex-1 space-x-2 min-h-screen overflow-y-auto">
        <div className='hidden md:block relative'>
          <Nav />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/new" element={<New />} />
          <Route path="/public" element={<Public />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/video" element={<Video />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/downloaded" element={<Downloaded />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
      
    </div>
  );
};

export default App;