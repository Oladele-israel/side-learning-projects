import HeroImage from "../../../public/header-image.png";
// const ApiKey = `2eb7cbc26a72fdf9bb5959a41c90d054`;
// const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWI3Y2JjMjZhNzJmZGY5YmI1OTU5YTQxYzkwZDA1NCIsInN1YiI6IjY1ZThiMGYwOTYzODY0MDE0NmM4NDYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SG_QFCqO8JL1ei0ZlK9g843At1FTDyvcIvmHUA8IKNs`;

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-slate-950 to-sky-800 w-screen h-screen relative">
      <img
        src={HeroImage}
        alt="netflixhomebg"
        className="absolute mix-blend-overlay h-screen w-screen"
      />
      <div className="absolute font-bold top-1/4 left-56 w-3/5 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center text-white">
          unleash the power of live streaming
        </h1>
        <p className="text-slate-100 mt-5 w-3/5 text-center ">
          seamless live streaming for creators, businesses, and events. elevate
          your online presence in real-time
        </p>
        <div className="bg-white w-7/12 p-2 border-sky-900 flex space-x-10 rounded-full mt-5">
          <input
            type="text"
            placeholder="Enter Your Email"
            className=" p-2 w-7/12 outline-none"
          />
          <button className="bg-red-800 w-4/12 rounded-full font-roboto text-slate-50">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
