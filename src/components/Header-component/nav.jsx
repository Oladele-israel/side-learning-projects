import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
const Nav = () => {
  return (
    <div className="flex bg-black p-5 space-x-36 ml-auto mr-auto justify-center items-center w-screen relative">
      <div className="flex space-x-14 text-gray-100 font-roboto text-lg">
        <Link to="movie">movies</Link>
        <Link>series</Link>
        <Link>Tv shows</Link>
      </div>
      <div className="bg-slate-500 hidden md:visible" >
        <FaBars className="text-gray-200 text-3xl" />
        <div>
          <Link>movies</Link>
          <Link>series</Link>
          <Link>Tv shows</Link>
        </div>
      </div>
      <div className="text-gray-50 font-Madimi text-3xl">
        <span className="text-red-500">Film</span>Box
      </div>
      <div className="flex space-x-5 ">
        <button className="bg-red-600 p-3 capitalize">signup</button>
        <button className="bg-slate-200 p-3 capitalize">sign in</button>
      </div>
    </div>
  );
};
export default Nav;
