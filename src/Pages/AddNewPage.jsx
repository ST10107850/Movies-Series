
import Hero from "../components/Hero";
import MoviesForm from "../components/MoviesForm";

const AddNewPage = () => {
  // Adding
  const addNew = async (newMovieOrSeries) => {
    const res = await fetch("/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovieOrSeries),
    });
    return;
  };

  return (
    <div>
      <Hero title="ADD A MOVIE/SERIES"/>
      <MoviesForm addMovieOrseries={addNew} />
    </div>
  );
};

export default AddNewPage;
