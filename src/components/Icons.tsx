import { FC } from "react";
import { Home, FilePlus, Globe, Music, Mic, Radio, Video } from "lucide-react"; // Import relevant icons

interface LectureIconProps {
  name:  string;
}

const LectureIcon: FC<LectureIconProps> = ({ name }) => {
  switch (name) {
    case "home":
      return <Home />;
    case "new":
      return <FilePlus />;
    case "public":
      return <Globe />;
    case "genre":
      return <Music />;
    case "playlist":
      return <Mic />;
    case "radio":
      return <Radio />;
    case "videos":
      return <Video />;
    default:
      return <Home />;
  }
};

export default LectureIcon;
