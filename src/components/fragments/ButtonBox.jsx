import { useContext } from "react";
import { Button } from "../elements/Button";
import { DarkMode } from "../../context/DarkMode";

export const ButtonBox = ({ active, setActive }) => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#171F26]" : "bg-white"
      } xs:max-md:w-[360px] xs:max-md:mx-auto flex items-center justify-center xs:max-md:justify-evenly xs:max-md:py-2 md:p-3 rounded-xl`}
    >
      <Button
        className={`${
          isDarkMode
            ? active === "Portfolio"
              ? "bg-[#0C151D] text-[#A3ABB2]"
              : "bg-transparent text-[#A3ABB2]"
            : active === "Portfolio"
            ? "bg-[#D7D7D7]"
            : "bg-transparent"
        } xs:max-md:w-[150px] md:w-[250px] h-12 rounded-lg text-lg font-semibold text-[#3D3D3D]`}
        onClick={() => setActive("Portfolio")}
      >
        Portfolio
      </Button>
      <Button
        className={`${
          isDarkMode
            ? active === "Skills"
              ? "text-[#A3ABB2] bg-[#0C151D]"
              : "text-[#A3ABB2] bg-transparent"
            : active === "Skills"
            ? "bg-[#D7D7D7]"
            : "bg-transparent"
        } xs:max-md:w-[150px] md:w-[250px] h-12 rounded-lg text-lg font-semibold`}
        onClick={() => setActive("Skills")}
      >
        Skills
      </Button>
    </div>
  );
};
