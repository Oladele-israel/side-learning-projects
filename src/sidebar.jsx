import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className=" bg-gray-950 w-24 h-3/4 mt-10  rounded flex flex-col space-y-10 justify-center p-6 items-center ">
        <Link>Home</Link>
        <Link>Movie</Link>
        <Link>Accounts</Link>
        <Link>Share</Link>
      </div>
  );
};
export default Sidebar;
