import { FaCircleCheck } from "react-icons/fa6";
const Card = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-600 to-blue-900 flex justify-center text-slate-100 p-4 ">
      <div className="flex items-center mx-9 space-x-2 text-lg font-roboto">
        <FaCircleCheck />
        <span>High-quality streaming</span>
      </div>
      <div className="flex items-center mx-9 space-x-2 text-lg font-roboto">
        <FaCircleCheck />
        <span>customization option</span>
      </div>
      <div className="flex items-center mx-9 space-x-2 text-lg font-roboto">
        <FaCircleCheck />
        <span>secure and reliable</span>
      </div>
    </div>
  );
};
export default Card;
