import MoviesList from "./movies";

const Genre = () => {
 

  return (
    <div className="bg-slate-950 ml-w-[75vw] ml-auto">
      <div className="bg-gradient-to-r from-red-900 to-indigo-900 h-[27vh] w-[100%] flex flex-col justify-center items-center">
        {/**the search bar component later for export */}
        <div className="bg-slate-200 w-[50%] h-[30%] rounded-[50px] flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="search movies"
            className=" p-2 w-[90%] bg-slate-200 outline-none text-black"
          />
        </div>
      </div>

      {/**this is the movie listing compnent */}
      <MoviesList/>
    </div>
  );
};

export default Genre;
