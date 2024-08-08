import background from "../assets/images/background.png";

const UpdateMovieHero = () => {
  return (
    <div
      className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">UPDATE A MOVIE/SERIES</h1>
      </div>
    </div>
  );
};

export default UpdateMovieHero;
