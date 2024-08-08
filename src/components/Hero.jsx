import background from "../assets/images/background.png";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat max-md:"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};

export default Hero;
