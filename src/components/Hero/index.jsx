import BG from "../../assets/bg/bg.png";
import Card from "./Card";
import Header from "./Header";
const Hero = () => {
  return (
    <div className="w-full relative min-h-screen overflow-hidden flex flex-col px-10 py-4 rounded-md">
      <img
        src={BG}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <Header />
      <Card />
    </div>
  );
};

export default Hero;
