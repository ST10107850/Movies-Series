import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const MoviesListing = ({ isHome = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiUrl = "/api/movies";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log("Fetched data:", data);

        // Ensure the structure of data before filtering
        const moviesArray = Array.isArray(data.movies) ? data.movies : data;
        const filteredMovies = moviesArray.filter(
          (movie) => movie.type === "movie"
        );

        setMovies(isHome ? filteredMovies.slice(0, 8) : filteredMovies);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [isHome]);

  return (
    <div>
      <section className="px-4 py-10">
        <div className="container xl:container lg:container m-auto">
          {isHome ? (
            <h2 className="text-base mb-12 text-center">LATEST MOVIES</h2>
          ) : (
            <div className="mt-4 mb-5 pb-3 flex justify-end">
              <Link
                to="/add-new"
                className="text-base h-auto bg-indigo-500 hover:bg-indigo-900 text-white px-3 py-1 rounded-full text-center flex items-center justify-center"
              >
                ADD
              </Link>
            </div>
          )}

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="flex justify-center">
              {/* Adjusted grid to show 2 cards on mobile with smaller images */}
              <div className={`grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                {movies.length > 0 ? (
                  movies.map((movie) => (
                    <div
                      key={movie.id}
                      className="bg-white shadow-md overflow-hidden sm:w-[210px] sm:h-[300px]"
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
                  <p className="text-center text-gray-500">
                    No movies available.
                  </p>
                )}
              </div>
            </div>
          )}

          {isHome && (
            <div className="mt-4 mb-5 pb-3 flex justify-end lg:mr-72 sm:mr-36 md:mr-52">
              <Link
                to="/movies"
                className="text-base bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-full text-center flex items-center justify-center"
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
