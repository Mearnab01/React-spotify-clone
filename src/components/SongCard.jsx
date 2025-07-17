import { Link } from "react-router-dom";
import { Play, Pause, Heart, Clock } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Album Art with Play Button */}
      <div className="relative w-full h-56 group overflow-hidden rounded-lg">
        <img
          alt={song.attributes.albumName}
          src={song.attributes.artwork.url}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Play/Pause Button - Shows on hover or when active */}
        <div
          className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ${
            isHovered || activeSong?.id === song.id
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              isPlaying && activeSong?.id === song.id
                ? handlePauseClick()
                : handlePlayClick(song, i);
            }}
            className="z-10 p-3 bg-green-500 rounded-full hover:scale-105 transition-transform"
          >
            {isPlaying && activeSong?.id === song.id ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current" />
            )}
          </button>
        </div>
      </div>

      {/* Song Info */}
      <div className="mt-4 flex flex-col space-y-2">
        <h3 className="text-white font-bold truncate hover:text-purple-400 transition-colors">
          <Link to={`/songs/${song.id}`}>
            {song.attributes.name || song.attributes.albumName}
          </Link>
        </h3>

        <div className="flex items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <Heart
              size={16}
              className={`cursor-pointer transition-colors ${
                isLiked ? "text-red-500 fill-red-500" : "hover:text-white"
              }`}
              onClick={() => setIsLiked(!isLiked)}
            />
            <span>by:</span>
            <Link
              to={`/artists/${song.attributes.artistId}`}
              className="hover:text-purple-300 transition-colors truncate max-w-[120px]"
            >
              {song.attributes.artistName}
            </Link>
          </div>

          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{formatDuration(song.attributes.durationInMillis)}</span>
          </div>
        </div>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-1 mt-1">
          {song.attributes.genreNames?.slice(0, 1).map((genre, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-900/30 text-xs text-purple-300 rounded-full shadow-md shadow-fuchsia-500"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongCard;
