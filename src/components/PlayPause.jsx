import { Play, Pause } from "lucide-react";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  };

  return (
    <>
      {isPlaying && activeSong?.title === song.title ? (
        <button
          onClick={handlePause}
          className={`text-white bg-green-500 rounded-full p-2 hover:scale-105 transition-transform ${sizeClasses[size]}`}
        >
          <Pause className="fill-current" />
        </button>
      ) : (
        <button
          onClick={handlePlay}
          className={`text-white bg-green-500 rounded-full p-2 hover:scale-105 transition-transform ${sizeClasses[size]}`}
        >
          <Play className="fill-current" />
        </button>
      )}
    </>
  );
};

export default PlayPause;
