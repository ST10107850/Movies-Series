import UpdateMovieHero from "../components/UpdateMovieHero";
import UpdateMovie from "../components/UpdateMovie";

const EditMoviePage = () => {
  //Update movie
  const UpdateMovies = async (movie) => {
    const res = await fetch(`/api/movies/${movie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    if (res.ok) {
      console.log(`Movie with id: ${movie.id} updated successfully.`);
      return true;
    } else {
      console.error(`Failed to update movie with id: ${movie.id}`);
      return false;
    }
  };

  return (
    <div>
      <UpdateMovieHero />
      <UpdateMovie UpdateMovies={UpdateMovies} />
    </div>
  );
};

export default EditMoviePage;
