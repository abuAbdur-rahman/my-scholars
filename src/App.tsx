import { Route, Routes, } from "react-router-dom"
import Home from "./(root)"
import Play from "./(root)/play"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="m-0 p-4 dark w-full min-h-screen">
      <Sidebar />
      Nav
      MobileNav
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/play" Component={Play}  />
    </Routes>
    </div>
  )
}

export default App