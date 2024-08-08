import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import AddNewPage from "./Pages/AddNewPage";
import NotFoundPage from "./Pages/NotFoundPage";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import SeriesPage from "./Pages/SeriesPage";
import MoviesInfo, { movieLoader } from "./Pages/MoviesInfo";
import EditMoviePage from "./Pages/EditMoviePage";

function App() {
  //Delete Movie
  const deleteMovie = async (id) => {
    const res = await fetch(`/api/movies/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log(`Movie with id: ${id} deleted successfully.`);
      return true;
    } else {
      console.error(`Failed to delete movie with id: ${id}`);
      return false;
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="/add-new" element={<AddNewPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route
          path="/movies/:id"
          element={<MoviesInfo deleteMovie={deleteMovie} />}
          loader={movieLoader}
        />
        <Route
          path="/edit-movie/:id"
          element={<EditMoviePage />}
          loader={movieLoader}
        />

        {/* Series  */}
        {/* <Route
          path="/series/:id"
          element={<MoviesInfo deleteSeries={deleteSeries} />}
          loader={seriesLoader}
        /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
