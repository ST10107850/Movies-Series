import background from "../assets/images/background.png";
import PropTypes from "prop-types";

const Hero = ({ title }) => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat md:h-[210px] sm:h-[170px] lg:h-[400px] flex justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-5xl text-white font-bold uppercase">{title}</h1>
    </div>
  );
};

// Properly defining propTypes
Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
