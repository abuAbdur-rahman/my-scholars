import { Button } from "@/components/ui/button";
import { queryById } from "@/db/query";
import { ArrowLeft, Pause, Play as Player } from "lucide-react";
import { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import {
  useParams, useNavigate
 } from "react-router-dom";

const Play = () => {
  const { audioId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  //const [lecture, setlecture] = useState<Lecture>({})
  const navigate = useNavigate()
  const {
    isError,
    data: lecture,
    error,
  } = useQuery({
    queryKey: ["play", audioId],
    queryFn: () => queryById(audioId!),
  });
  useEffect(() => console.log(lecture), [lecture]);
  if (isError) alert("Error was Encounterd" + error);
  return (
    <div className='h-screen bg-gray-900 text-white flex flex-col gap-5'>
      {/* Header */}
      <header className='flex items-center justify-between px-4 py-2 bg-gray-800'>
        <Button
          variant='ghost'
          onClick = {() => navigate(-1)}
          className='text-lg font-bold flex items-center gap-2'>
          <ArrowLeft />
          Back
        </Button>
        <h1 className='text-xl font-semibold flex-1 text-center'>Now Playing</h1>
        <div className='w-6' />
      </header>

      {/* Media Player */}
      <main className='flex flex-col items-center justify-center px-4'>
        {/* Video Player */}
        <div className='w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-lg'>
          <ReactPlayer
            url={lecture?.audio_url}
            playing={isPlaying}
            controls
            width='100%'
            height='100%'
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>

        {/* Title and Description */}
        <div className='mt-6 text-center'>
          <Marquee velocity={20}>
            <h2 className='text-2xl font-semibold'>{lecture?.lecture_title}</h2>
            <span></span>
          </Marquee>
          <p className='text-gray-400'>Artist Name • Album Name</p>
        </div>
      </main>

      {/* Player Controls */}
      <footer className='flex items-center justify-center bg-gray-800 py-4 px-8'>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className='w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white'
        >
          {isPlaying ? <Pause /> : <Player />}
        </button>
      </footer>
    </div>
  );
};

export default Play;
