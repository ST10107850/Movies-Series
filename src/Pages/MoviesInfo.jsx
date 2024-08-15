import PropTypes from "prop-types";
import {  useLoaderData, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Hero from "../components/Hero";

const MoviesInfo = ({ deleteMovie }) => {
  const navigate = useNavigate();
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
      <Hero title={movies.name}/>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 p-6 sm:flex-row ">
        <img
          src={movies.imageFile}
          alt="Movie Poster"
          className="lg:w-[304px] lg:h-[408px]  shadow-lg mb-6 lg:mb-0 sm:w-[200px] sm:h-[250px]"
        />
        <div className="p-6 lg:ml-10 w-full lg:w-auto sm:w-auto sm:ml-10">
          <h2 className="text-5xl font-bold mb-8">{movies.name}</h2>
          <p className="mb-8 lg:w-[550px] text-base font-normal">
            {movies.description}
          </p>
          <p className="mb-2">
            <strong>Country:</strong> {movies.country}
          </p>
          <p className="mb-2">
            <strong>Genre:</strong> {movies.genre.join(", ")}
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

MoviesInfo.propTypes={
  deleteMovie: PropTypes.func.isRequired,
}

export { MoviesInfo as default, movieLoader };
