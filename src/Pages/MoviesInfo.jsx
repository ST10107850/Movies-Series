import background from "../assets/images/background.png";
import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MoviesInfo = ({ deleteMovie }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movies = useLoaderData();

  const onDeleteClick = async (movieId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this movie/ series?"
    );
    if (!confirm) return;

    const success = await deleteMovie(movieId);

    if (success) {
      toast.success("Movie/ Series has been deleted.");
      navigate("/");
    } else {
      toast.error("Failed to delete the movie/ series.");
    }
  };

  return (
    <>
      <div
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{movies.name}</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 p-6">
        <img
          src={movies.imageFile}
          alt="Movie Poster"
          className="w-[340px] h-[408px] rounded-lg shadow-lg mb-6 lg:mb-0"
        />
        <div className="p-6 lg:ml-10 w-full lg:w-auto">
          <h2 className="text-4xl font-bold mb-2">{movies.name}</h2>
          <p className="mb-2 lg:w-[550px] text-base font-normal">
            {movies.description}
          </p>
          <p className="mb-2">
            <strong>Country:</strong> {movies.country}
          </p>
          <p className="mb-2">
            <strong>Genre:</strong> Genre Name
          </p>
          <p className="mb-2">
            <strong>Year:</strong> {movies.year}
          </p>
          <p className="mb-4">
            <strong>Type:</strong> {movies.type}
          </p>
          <div className="flex justify-start space-x-12">
            <Link
              to={`/edit-movie/${movies.id}`}
              className="bg-indigo-500 text-white py-2 px-6 rounded-2xl hover:bg-blue-700"
            >
              Edit
            </Link>
            <button
              onClick={() => onDeleteClick(movies.id)}
              className="bg-indigo-500 text-white py-2 px-6 rounded-2xl hover:bg-blue-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const movieLoader = async ({ params }) => {
  const res = await fetch(`/api/movies/${params.id}`);
  const data = await res.json();
  return data;
};

export { MoviesInfo as default, movieLoader };
