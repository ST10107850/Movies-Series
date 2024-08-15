import Hero from "../components/Hero";
import MoviesListings from "../components/MoviesListings";
// import MoviesHero from "../components/moviesHero";


const MoviesPage = () => {
  return (
    <div>
      {/* <MoviesHero /> */}
      <Hero title="LATEST MOVIES"/>
      <MoviesListings />
    </div>
  );
};

export default MoviesPage;
