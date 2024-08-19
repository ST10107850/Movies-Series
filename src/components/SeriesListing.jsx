import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SeriesListing = ({ isHome = false }) => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const apiUrl = "/api/movies";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log("Fetched data:", data); // Log the data

        // Ensure the structure of data before filtering
        const seriesArray = Array.isArray(data.series) ? data.series : data;
        const filterSeries = seriesArray.filter(
          (movie) => movie.type === "series"
        );

        setSeries(isHome ? filterSeries.slice(0, 8) : filterSeries);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchSeries();
  }, [isHome]);

  return (
    <div>
      <section className="px-4 py-10">
        <div className="container-xl lg:container m-auto">
          {isHome ? (
            <h2 className="text-base mb-12 text-center">LATEST SERIES</h2>
          ) : (
            <div className="mt-4 mb-5 pb-3 flex justify-end">
              <Link
                to="/add-new"
                className="text-base bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-full"
              >
                ADD
              </Link>
            </div>
          )}

          <div className="flex justify-center">
            {/* Adjusted grid to show images filling the blocks */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {series.length > 0 ? (
                series.map((movie) => (
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
                <p className="text-center flex justify-center text-gray-500">
                  No series available.
                </p>
              )}
            </div>
          </div>

          {isHome && (
            <div className="mt-4 mb-5 pb-3 flex justify-end lg:mr-72 sm:mr-36 md:mr-52">
              <Link
                to="/series"
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

export default SeriesListing;
