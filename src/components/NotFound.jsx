import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-slate-700 hover:bg-slate-900 rounded-md py-2 px-3 mt-4"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
