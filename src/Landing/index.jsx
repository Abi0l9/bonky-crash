import Game from "../components/Game";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Missed from "../components/Missed";
import Plan from "../components/Plan";
import Socials from "../components/Socials";
import Tokenomics from "../components/Tokenomics";

const Landing = () => {
  return (
    <div className="bg-bonky-bg-1 min-h-screen px-8 md:px-[8rem] bg-bonky-bg">
      <div className="w-full flex flex-col bg-bonky-bg-2 min-h-screen py-8 md:py-[4rem]">
        <div className="flex flex-col items-center justify-center w-full">
          <Hero />
        </div>
        <div className="">
          <Intro />
        </div>
        <div className="">
          <Plan />
        </div>
        <div className="">
          <Game />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <Tokenomics />
        </div>
        <div className="">
          <Missed />
        </div>
      </div>
      <div className="my-4 flex flex-col items-center justify-center w-full">
        <Socials />
      </div>
    </div>
  );
};

export default Landing;
