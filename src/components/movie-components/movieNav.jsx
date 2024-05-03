import { useState } from "react";
import { Link } from "react-router-dom";
const navBtn = ["genre", "trending", "upcoming", "favorite"];

const MovieNav = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const handleActive = (i) => {
    setActiveBtn(i);
  };
  return (
    <>
      <div className="bg-black w-[25%] h-[100vh] p-4 text-center sticky top-0">
        <div className="text-gray-50 font-Madimi text-3xl mt-[3rem]">
          <Link to={"/"}>
            <span className="text-red-500">Film</span>Box
          </Link>
        </div>
        <div className="flex flex-col gap-5 mt-[2rem] text-center text-slate-300">
          {navBtn.map((btn, index) => (
            <Link
              className={` ${
                activeBtn == index ? "bg-red-900" : "bg-slate-900"
              } capitalize p-3 font-roboto font-bold rounded-[5px] text-slate-300`}
              key={index}
              onClick={() => handleActive(index)}
              to={index === 0 ? "" : btn}
            >
              {btn}
            </Link>
          ))}
        </div>
        <div className="mt-20 bg-slate-950 p-3 font-roboto font-bold rounded-[5px] text-slate-300">
          <button>Login</button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default MovieNav;
//className=" bg-slate-900 capitalize p-3 font-roboto font-bold rounded-[5px] text-slate-300"
