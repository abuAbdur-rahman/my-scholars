import { routes } from "@/constants/routes";
import { SideBarItem } from "./Sidebar";
import Indicator from "./Indicator";

const Lectured = {
  id: "5ed2ba6e-85db-4198-a231-ace9b03bf9c4",
  lecturer_name: "Dr. Sharafadeen Gbadebo Raji",
  lecture_title: "Understanding Tawheed",
  audio_url:
    "https://example.com/audio/dr-sharafadeen-gbadebo-raji/understanding-tawheed.mp3",
  date_uploaded: "2024-10-31",
  description: "An in-depth discussion on Tawheed and its importance in Islam.",
  duration: "45:30", // Duration formatted as MM:SS or HH:MM:SS
  tags: '"Tawheed", "Aqeedah", "Basics of Islam"',
  category: "Aqeedah",
};

const BottomNav = () => {
  return (
    <nav className='sm-hidden fixed bottom-5 w-full px-2'>
      <Indicator lecture={Lectured} />
      <div className='mb-5' />
      <div className='w-full rounded-t-3xl bg-gray-800/60'>
        <div className='flex w-full items-center justify-around p-2'>
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
  );
};

export default BottomNav;
