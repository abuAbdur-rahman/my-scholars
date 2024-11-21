import Marquee from "react-marquee-slider"
import { SkipBack, Play, SkipForward } from 'lucide-react';


const Indicator = ({ lecture }: {lecture: Lecture}) => {
  return (
      <div className="bg-gray-900/70 border-2 w-full p-4 flex items-center gap-4 justify-space-around">
          <img
            src={lecture.audio_url}
            className="w-10 h-10 object-cover rounded-md"
          />
          <div className='flex-1'>
              <Marquee velocity={20}>
                  <p>{lecture.lecture_title}</p>
                  <small className='block'></small>
              </Marquee>
              <small className='block'>{lecture.lecturer_name}</small>
              
          </div>
          <div className="flex items-center justify-around gap-5">
              <SkipBack />
              <Play />
              <SkipForward />
          </div>
          <div>
              
          </div>
    </div>
  )
}

export default Indicator