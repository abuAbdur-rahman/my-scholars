import Search from "./Search"


const Nav = () => {
  return (
      <nav className="flex items-center gap-5">
          <div className='flex-1'>
              <Search />
          </div>
          <div className="w-10 h-10 eounded-full flex items-center justify-center p">
              AZ
          </div>
      </nav>
  )
}

export default Nav