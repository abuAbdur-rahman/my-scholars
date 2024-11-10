import { routes } from "@/constants/routes";
import { Link, useLocation } from "react-router-dom";
import LectureIcon from "./Icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const NavItem = ({ name, route }: { name: string; route: string }) => {
  const location = useLocation()
  return (
    <Link to={route} className={cn('w-full p-5 flex items-center gap-5', location.pathname === route && 'bg-primary rounded-xl text-black')}>
            <LectureIcon name={name} />
      <p>{name.toUpperCase()}</p>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu width={24} height={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <Link to='/' className='flex gap-5 p-5'>
            <img src='../assets/react.svg' className='contain w-10 h-10' />
            <h1 className='bold text-2xl tracking'>Al-Ma'wa</h1>
          </Link>
        </SheetTitle>
        <nav>
          <h2 className='text-xl font-mono'>Lectures</h2>
          <ul className='w-full p-2 flex flex-col gap-1 mt-4'>
            {routes.lectures.map((route) => {
              return (
                <NavItem
                  key={route.name}
                  name={route.name}
                  route={route.route}
                />
              );
            })}
          </ul>
          <h2 className='text-xl font-mono'>Libraries</h2>
          <ul className='w-full flex flex-col gap-1 p-2'>
            {routes.libraries.map((route) => {
              return (
                <NavItem
                  key={route.name}
                  name={route.name}
                  route={route.route}
                />
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet >
  );
};

export default MobileNav;
