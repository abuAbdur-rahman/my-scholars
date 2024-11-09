import { Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <div className='m-0 p-4 dark w-full min-h-screen'>
      <Sidebar />
      Nav MobileNav
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
