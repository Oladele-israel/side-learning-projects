import { useState, useEffect } from "react";

const MoviesList = ({}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(28); // Default genre: Action
  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
  };

  useEffect(() => {
    const fetchMovieGenre = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=ee5d83e01d4ca6fba115f4a4058e489d&with_genres=${selectedGenre}`
        );
        setLoading(!loading);
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
      setLoading(!loading);
    };

    fetchMovieGenre();
  }, [selectedGenre]);

  return (
    <>
      <div className="flex flex-col sticky top-0 w-[100%]">
        <div className="flex flex-wrap text-slate-300 font-roboto w-[100%] ml-auto bg-black gap-5 justify-center p-5">
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px"
            onClick={() => handleGenreChange(28)}
          >
            Action
          </button>
          <button
            className="bg-slate-900 p-1 w-25 font-roboto rounded-[5px] text-base"
            onClick={() => handleGenreChange(12)}
          >
            Adeventure
          </button>

          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(16)}
          >
            Animation
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(35)}
          >
            Comedy
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(80)}
          >
            Crime
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(99)}
          >
            Documentary
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(18)}
          >
            Drama
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(10751)}
          >
            Family
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(14)}
          >
            Fantasy
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(36)}
          >
            History
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(27)}
          >
            Horror
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(10402)}
          >
            Music
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(9648)}
          >
            Mystery
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(10749)}
          >
            Romance
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(878)}
          >
            Science Fiction
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(10770)}
          >
            Tv Movie
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(53)}
          >
            Thriller
          </button>
          <button
            className="bg-slate-900 p-2 w-36 font-roboto rounded-[5px]"
            onClick={() => handleGenreChange(10752)}
          >
            War
          </button>
        </div>
      </div>
      <div className="w-[100%] h-auto p-5 flex flex-row gap-3">
        {movies.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-[30rem] h-[20rem] transition ease-in-out delay-120 bg-blue-500 hover:-translate-y-2 hover:scale-110 duration-200 "
            key={movie.id}
          />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
