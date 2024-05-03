import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Discover = () => {
  const [movies, setMovies] = useState([]);
  //hook for slider button
//   const swiper = useSwiper();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=ee5d83e01d4ca6fba115f4a4058e489d`
      );
      const movieData = await response.json();
      setMovies(movieData.results);
    };

    fetchMovie();
  }, []);

  return (
    <div className=" border bg-slate-950 w-screen min-h-screen">
      <div className="mr-auto ml-auto w-5/12 text-center text-slate-200 capitalize font-roboto text-4xl mt-20">
        discover more movie
      </div>
      <div className="mr-auto ml-auto w-8/12 text-center text-slate-200 capitalize font-roboto font-thin text-xl mt-6 ">
        indulge in a cinematic journey with our collection of watchable movies
      </div>

      {/*below we use the slider and the api */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
     
        className="flex h-[20vw] overflow-x-auto mt-20 ml-auto mr-auto "
      >
        {movies.slice(0, 40).map((movie) => (
          <SwiperSlide key={movie.key}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="moviesTmdb"
              className="object-contain mx-2"
            />
          </SwiperSlide>
        ))}
        ...
      </Swiper>

      {/**buttons for the swiper */}
      <button className="text-white bg-blue-700 p-3 mx-4">
        <FaArrowLeft />
      </button>

      <button className="text-white bg-blue-700 p-3 mx-[20px] mt-8">
        <FaArrowRight />
      </button>
    </div>
  );
};
export default Discover;
