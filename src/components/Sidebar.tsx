import { routes } from "@/constants/routes";
import { Link } from "react-router-dom";
import LectureIcon from "./Icons";

const SideBarItem = ({ name, route }: { name: string; route: string }) => (
  <Link to={route}>
    <LectureIcon name={name} />
    <p>{name.toUpperCase()}</p>
  </Link>
);

const Sidebar = () => {
  return (
    <aside className='hidden md:w-1/6 lg:w-2/6 h-screen'>
      <Link to='/' className='flex gap-5 p-5'>
        <img src='../assets/react.svg' className='contain w-10 h-10' />
        <h1 className='bold text-2xl tracking'>Al-Ma'wa</h1>
      </Link>
      <nav>
        <h2>Lectures</h2>
        <ul>
          {routes.lectures.map((route) => {
            return <SideBarItem key={route.name} name={route.name} route={route.route} />;
          })}
        </ul>
        <h2>Libraries</h2>
        <ul>
          {routes.libraries.map((route) => {
            return <SideBarItem key={route.name} name={route.name} route={route.route} />;
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
