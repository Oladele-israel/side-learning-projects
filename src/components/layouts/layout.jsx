import { Outlet } from "react-router-dom";
import MovieNav from "../movie-components/movieNav";
import Genre from "../movie-components/genre";


const Layout = () => {
  return (
    <div className="flex">
    <MovieNav><Genre/></MovieNav>
    <Outlet/>
    </div>
  );
};
export default Layout;
