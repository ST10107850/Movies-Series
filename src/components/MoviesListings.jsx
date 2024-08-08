import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MoviesListing = ({ isHome = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiUrl = "/api/movies";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log("Fetched data:", data); // Log the data

        // Ensure the structure of data before filtering
        const moviesArray = Array.isArray(data.movies) ? data.movies : data;
        const filteredMovies = moviesArray.filter(
          (movie) => movie.type === "movie"
        );

        setMovies(isHome ? filteredMovies.slice(0, 8) : filteredMovies);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchMovies();
  }, [isHome]);

  return (
    <div>
      <section className="px-4 py-10 max-md:">
        <div className="container-xl lg:container m-auto">
          {isHome ? (
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
              LATEST MOVIES
            </h2>
          ) : (
            <div className="mt-4 mb-5 pb-3 flex justify-end">
              <Link
                to="/add-new"
                className="text-2xl h-auto bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center flex items-center justify-center"
              >
                Add
              </Link>
            </div>
          )}
          <div
            className={`grid grid-cols-1 ${
              isHome ? "md:grid-cols-4" : "md:grid-cols-4"
            } gap-6`}
          >
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  style={{ height: "400px" }}
                >
                  <Link to={`/movies/${movie.id}`}>
                    <img
                      src={movie.imageFile || "/default-image.png"}
                      alt={movie.title || "Movie poster"}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No movies available.</p>
            )}
          </div>
          {isHome && (
            <div className="mt-4 mb-5 pb-3 flex justify-end">
              <Link
                to="/movies"
                className="text-2xl h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center flex items-center justify-center"
              >
                More
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MoviesListing;
