import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterPage from "../Pages/FooterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
        <ToastContainer />
      </header>
      <main>
        <Outlet />
      </main>
      <FooterPage />
    </div>
  );
};

export default MainLayout;
