import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { toast } from "react-toastify";

const UpdateMovie = ({ UpdateMovies }) => {
  const { id } = useParams();
  const movie = useLoaderData();

  const [name, setName] = useState(movie.name);
  const [description, setDescription] = useState(movie.description);
  const [country, setCountry] = useState(movie.country);
  const [year, setYear] = useState(movie.year);
  const [type, setType] = useState(movie.type);
  const [imageFile, setImageFile] = useState(movie.imageFile);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  function convertToBase64(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageFile(reader.result);
        console.log("File converted to base64:", reader.result);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  }

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const UpdatingMovies = (e) => {
    e.preventDefault();

    const updateMovie = {
      id,
      name,
      description,
      country,
      year,
      type,
      imageFile,
    };
    UpdateMovies(updateMovie);

    toast.success("Movie has been updated successfully");

    return navigate(`/movies/${id}`);
  };

  return (
    <div>
      <div className="flex flex-col items-center p-6">
        <div className="flex w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-1/2 p-4 bg-gray-100 flex items-center flex-col justify-center">
            <input
              type="file"
              accept="image/*"
              className="hidden" // Hide the file input
              ref={fileInputRef}
              onChange={convertToBase64}
            />
            <img
              src={imageFile || movie.imageFile}
              alt={name}
              className="w-[360px] h-[408px] rounded-lg shadow-lg mb-6 lg:mb-0 cursor-pointer"
              onClick={handleImageClick} // Trigger file input click
            />
          </div>
          <div className="w-2/3 p-4">
            <h2 className="text-2xl font-bold mb-6">Movie/Series Form</h2>
            <form onSubmit={UpdatingMovies}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter country"
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  placeholder="Enter year"
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <fieldset className="mb-6 flex-row flex items-center justify-between gap-7">
                <legend className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </legend>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="movie"
                    name="type"
                    value="movie"
                    className="mr-2"
                    checked={type === "movie"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label htmlFor="movie" className="text-sm text-gray-700">
                    Movie
                  </label>
                </div>
                <div className="flex items-center mr-96">
                  <input
                    type="radio"
                    id="series"
                    name="type"
                    value="series"
                    className="mr-2"
                    checked={type === "series"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label htmlFor="series" className="text-sm text-gray-700">
                    Series
                  </label>
                </div>
              </fieldset>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md"
              >
                SAVE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;
