import { useEffect, useState } from "react";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/week?api_key=ee5d83e01d4ca6fba115f4a4058e489d`
        );
        const data = await response.json();
        console.log(data.results);
        setTrending(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-slate-800 to-orange-950 w-[100vw] ">
      <div className="text-2xl mt-[9rem] text-slate-200 font-Madimi ml-6">
        Trending movies .....
      </div>
      <div className="w-[100%] h-auto p-5 flex flex-row gap-3">
        {trending.map((trend) => (
          <img
            src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
            alt={trend.title}
            className="w-[30rem] h-[20rem] transition ease-in-out delay-120 bg-blue-500 hover:-translate-y-2 hover:scale-110 duration-200 "
            key={trend.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
