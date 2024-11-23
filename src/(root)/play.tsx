import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Volume2,
  Shuffle,
  Repeat,
  Play as PlayIcon,
  Pause,
  ChevronLeft,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { queryById } from "@/db/query";

const Play = () => {
  const { audioId: id } = useParams();
  const navigate = useNavigate();
    
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(.8); // 1 is max

  const {
    data: lecture,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["play", id],
    queryFn: () => queryById(id!),
    //enabled: !!id,
    onSuccess: (data) => {
      if (data?.audio_url) {
        const newAudio = new Audio(data.audio_url);
        newAudio.addEventListener("timeupdate", () =>
          setCurrentTime(newAudio.currentTime)
        );
        newAudio.addEventListener("loadedmetadata", () =>
          setDuration(newAudio.duration)
        );
        setAudio(newAudio);
      }
    },
  });

  const handlePlayPause = () => {
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audio) audio.volume = newVolume;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audio) audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    return () => {
      audio?.pause();
      audio?.removeEventListener("timeupdate", () =>
        setCurrentTime(audio.currentTime)
      );
      audio?.removeEventListener("loadedmetadata", () =>
        setDuration(audio.duration)
      );
    };
  }, [audio]);

  if (isLoading) {
    return (
      <div className='p-4 space-y-4'>
        <Skeleton className='h-10 w-1/3' />
        <Skeleton className='h-72 w-full' />
        <Skeleton className='h-6 w-1/2' />
        <Skeleton className='h-6 w-1/4' />
        <Skeleton className='h-10 w-full' />
      </div>
    );
  }

  if (isError || !lecture) {
    return (
      <div className='p-4'>
        <h2 className='text-lg font-bold'>Error loading lecture.</h2>
        <Button variant='ghost' onClick={() => navigate(-1)}>
          <ChevronLeft className='mr-2' /> Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className='p-4'>
      {/* Header */}
      <header className='flex justify-between items-center mb-4'>
        <Button variant='ghost' onClick={() => navigate(-1)} className='justify-self-start'>
          <ChevronLeft className='mr-2' /> Back
        </Button>
        <h1 className='text-xl font-semibold justify-self-center'>
          Now Playing
        </h1>
      </header>

      {/* Media Section */}
      <div className='flex flex-col items-center space-y-4'>
        <div className='w-full max-w-md'>
          <img
            src='https://via.placeholder.com/300x200'
            alt='Audio Image'
            className='w-full max-h-72 object-cover rounded-lg shadow-lg'
          />
        </div>
        <h2 className='text-lg font-bold'>{lecture.lecture_title}</h2>
        <p className='text-sm text-gray-500'>By {lecture.lecturer_name}</p>
        <div className='flex space-x-2'>
          {lecture.tags.split(" ").map((tag: string) => (
            <span
              key={tag}
              className='text-xs bg-gray-200 px-2 py-1 rounded-full'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Player Controls */}
      <footer className='flex flex-col items-center space-y-4 mt-8'>
        <div className='w-full max-w-md'>
          <Progress value={(currentTime / duration) * 100} className='mb-2' />
          <div className='flex justify-between text-xs'>
            <span>
              {new Date(currentTime * 1000).toISOString().substr(14, 5)}
            </span>
            <span>{new Date(duration * 1000).toISOString().substr(14, 5)}</span>
          </div>
          <input
            type='range'
            className='w-full'
            min='0'
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
          />
        </div>
        <div className='flex items-center space-x-4'>
          <Button variant='ghost'>
            <Shuffle className='w-6 h-6' />
          </Button>
          <Button
            onClick={handlePlayPause}
            variant='ghost'
            className='w-10 h-10'
          >
            {isPlaying ? (
              <Pause className='w-full h-full' />
            ) : (
              <PlayIcon className='w-full h-full' />
            )}
          </Button>
          <Button variant='ghost'>
            <Repeat className='w-6 h-6' />
          </Button>
        </div>
        <div className='flex items-center space-x-2'>
          <Volume2 className='w-5 h-5' />
          <input
            type='range'
            className='w-48'
            min='0'
            max='1'
            step='0.01'
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </footer>
    </div>
  );
};

export default Play;
