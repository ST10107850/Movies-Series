import MoviesListings from "../components/MoviesListings";
import Hero from "../components/Hero";
import SeriesListing from "../components/SeriesListing";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MoviesListings isHome={true} />
      <SeriesListing isHome={true} />
    </div>
  );
};

export default HomePage;
