import loadLink from "../../utils/loadLink";

const Header = () => {
  return (
    <div className="z-10 w-full relative">
      <div
        onClick={() => loadLink()}
        className="font-nabla text-2xl text-[#C04E00]"
      >
        BONKY CRASH
      </div>
    </div>
  );
};

export default Header;
