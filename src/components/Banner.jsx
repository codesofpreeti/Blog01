import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Welcome to our blog</h1>
        <p className="text-gray-300 lg:w-3/5 mx-auto mb-5 font-primary">Start your blog today and join our community of writers and readers who are passionate about sharing their stories and ideas</p>
        <div>
            <Link to="/" className="font-medium hover:text-blue-300 inline-flex items-center py-1">Learn More<FaArrowRight className="mt-1 ml-2" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
