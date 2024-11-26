import Marquee from "react-marquee-slider";
import { SkipBack, Play, SkipForward, Pause } from "lucide-react";
import { Action } from "@/hooks/useLectursPlay";
import { Button } from "./ui/button";


type IndicatorProps = {
  lecture: Lecture;
  isPlaying: boolean;
  dispatch: React.Dispatch<Action>;
  id: string;
}

const Indicator = ({ lecture, isPlaying, dispatch, id }: IndicatorProps) => {


  return (
    <div className='bg-gray-900/70 border-2 w-full p-4 flex items-center gap-4 justify-space-around'>
      <img
        src={lecture.audio_url}
        className='w-10 h-10 object-cover rounded-md'
      />
      <div className='flex-1'>
        <Marquee velocity={5}>
          <p>{lecture.lecture_title}</p>
          <small className='block'></small>
        </Marquee>
        <small className='block'>{lecture.lecturer_name}</small>
      </div>
      <div className='flex items-center justify-around gap-5'>
        <SkipBack
          onClick={() => console.log('Clicked')}
        />
        <Button 
          variant='ghost'
          onClick={() => {
            if (isPlaying) {
              dispatch({ type: "PAUSE"});
            } else {
              dispatch({ type: "PLAY", payload: { id: id } });
            }
          }}
        >{
          !isPlaying ?
          <Play/> :
          <Pause />
        }</Button>
        <SkipForward
          onClick={() => console.log('Clicked')}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Indicator;
