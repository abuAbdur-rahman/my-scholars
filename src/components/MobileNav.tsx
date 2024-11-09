import { routes } from "@/constants/routes";
import { Link } from "react-router-dom";
import LectureIcon from "./Icons";
import { Sheet, SheetContent, SheetTrigger } from '@shadcn/ui/Sheet';
import {Menu} from 'lucide-react'

const NavItem = ({ name, route }: { name: string; route: string }) => (
  <Link to={route}>
    <LectureIcon name={name} />
    <p>{name.toUpperCase()}</p>
  </Link>
);

const MobileNav = () => {
  return (
    <Sheet>
    <SheetTrigger>
      <Menu width={24} height={24}/>
    </SheetTrigger>
    <SheetContent>
    <nav className='hidden md:w-1/6 lg:w-2/6 h-screen'>
      <Link to='/' className='flex gap-5 p-5'>
        <img src='../assets/react.svg' className='contain w-10 h-10' />
        <h1 className='bold text-2xl tracking'>Al-Ma'wa</h1>
      </Link>
      <div>
        <h2>Lectures</h2>
        <ul>
          {routes.lectures.map((route) => {
            return <NavItem key={route.name} name={route.name} route={route.route} />;
          })}
        </ul>
        <h2>Libraries</h2>
        <ul>
          {routes.libraries.map((route) => {
            return <NavItem key={route.name} name={route.name} route={route.route} />;
          })}
        </ul>
      </div>
    </nav>
    </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
