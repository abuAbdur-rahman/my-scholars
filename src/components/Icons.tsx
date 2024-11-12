import { FC } from "react";
import { Home, FilePlus, Globe, Music, Mic, Library, History, Download, Video, Radio, Star} from "lucide-react"; // Import relevant icons

interface LectureIconProps {
  name: string;
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
    case "favourite":
      return <Star />;
    case "downloaded":
      return <Download />;
    case "history":
      return <History />;
    case "library":
      return <Library />;
    default:
      return <Home />;
  }
};

export default LectureIcon;
