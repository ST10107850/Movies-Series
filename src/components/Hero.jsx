import background from "../assets/images/background.png";
import PropTypes from "prop-types";

const Hero = ({ title }) => {
  return (
    <div
      className="relative h-[120px] w-full bg-cover bg-center bg-no-repeat md:h-[210px] sm:h-[170px] lg:h-[400px] flex justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
<<<<<<< HEAD
      <h1 className="text-5xl text-white font-bold uppercase">{title}</h1>
=======
      <h1 className="text-white font-bold  lg:text-3xl sm:text-2xl">{title}</h1>
>>>>>>> 68710debd74471a41e674a9cf64de8b8b8de0142
    </div>
  ); 
};

// Properly defining propTypes
Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
