import {routes} from '@/constants/routes'
import { SideBarItem } from './Sidebar'

const BottomNav = () => {
  return (
      <nav className='sm-hidden fixed bottom-5 w-full px-2'>
          <div className="w-full rounded-t-3xl bg-gray-800/60">
              <div className="flex w-full items-center justify-around p-2">
                  {routes.mobile.map((route) => (
                      <SideBarItem
                      key={route.route}
                          name={route.name}
                          route={route.route}
                          isBottom
                      />
                  ))}
              </div>
        </div>
    </nav>
  )
}

export default BottomNav