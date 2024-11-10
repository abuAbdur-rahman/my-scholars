import {Search as Sch} from 'lucide-react'
import { useState } from 'react'



const Search = () => {
    const [search, setSearch] = useState('')
  return (
      <div className='w-full flex items-center bg-gray-800/90 p-3 gap-5 rounded-lg shadow-sm'>
          <Sch width={20} height={20} />
          <input
            value={search}
            placeholder='Salafiyyah'
            onChange={(e) => { setSearch(e.target.value) }}
            className='border-none focus:outline-none flex-1 bg-transparent'
          />
      </div>
  )
}

export default Search