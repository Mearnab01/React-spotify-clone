import { useDispatch, useSelector } from "react-redux";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const genreTitle = "Pop";
  const { data, isLoading, isError, isFetching } = useGetTopChartsQuery();
  if (isError) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center mt-4 mb-10">
        <h2 className="text-3xl font-bold text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          style={{
            padding: "0.75rem", // p-3
            borderRadius: "0.5rem", // rounded-lg
            outline: "none", // outline-none
            marginTop: "1rem", // mt-4 (fallback)
            background: "#4c426e", // custom background color
            color: "white", // text color
            border: "none", // empty string means no border
          }}
        >
          {genres.map((genre) => (
            <option value={genre.value} key={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.length > 0
          ? data.map((song, index) =>
              isFetching ? (
                <Loader key={index} />
              ) : (
                <SongCard
                  key={song.key || index}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  data={data}
                  song={song}
                  i={index}
                />
              )
            )
          : isLoading && <Loader />}
      </div>
    </div>
  );
};

export default Discover;
