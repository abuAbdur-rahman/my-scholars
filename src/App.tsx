import { Link, Route, Routes } from "react-router-dom";
import Home from "./(root)";
import Play from "./(root)/play";
import Sidebar from "./components/Sidebar";
import New from "./(root)/New";
import Public from "./(root)/Public";
import Video from "./(root)/Video";
import Downloaded from "./(root)/downloaded";
import History from "./(root)/History";
import PlayList from "./(root)/PlayList";
import Favorite from "./(root)/favorite";
import Genre from "./(root)/Genre";
import MobileNav from "./components/MobileNav";
import { HomeIcon } from "lucide-react";
import Search from "./components/Search";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className='m-0 dark w-full min-h-screen absolute'>
      {/* Medium and Desktop device */}
      <Sidebar />
      <header className='w-full hidden md:block sticky top-0 z-10'>
        <Nav />
      </header>

      {/*Mobile Nav*/}
      <header className='bg-gray-800/70 center gap-5 md:hidden shaɗow-lg p-4 sticky top-0'>
        <Link to='/'>
          <HomeIcon />
        </Link>
        <div className='flex-1'>
          <Search />
        </div>
        <div>
         <MobileNav />
        </div>
      </header>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/play' Component={Play} />
        <Route path='/new' Component={New} />
        <Route path='/public' Component={Public} />
        <Route path='/genre' Component={Genre} />
        <Route path='/playlists' Component={PlayList} />
        <Route path='/videos' Component={Video} />
        <Route path='/favorites' Component={Favorite} />
        <Route path='/downloaded' Component={Downloaded} />
        <Route path='/history' Component={History} />
      </Routes>
    </div>
  );
};

export default App;
