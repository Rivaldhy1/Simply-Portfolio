import { useContext } from "react";
import { Button } from "../elements/Button";
import { DarkMode } from "../../context/DarkMode";

export const ButtonBox = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#171F26]" : "bg-white"
      } xs:max-md:w-[360px] xs:max-md:mx-auto flex items-center justify-center xs:max-sm:justify-evenly xs:max-md:py-2 md:p-3 rounded-xl`}
    >
      <Button
        className={`${
          isDarkMode ? "bg-[#0C151D] text-[#A3ABB2]" : "bg-[#D7D7D7]"
        } xs:max-md:w-[150px] md:w-[250px] h-12 rounded-lg text-lg font-semibold text-[#3D3D3D]`}
      >
        Portfolio
      </Button>
      <Button
        className={`${
          isDarkMode ? "text-[#A3ABB2]" : "text-[#3D3D3D]"
        } bg-transparent xs:max-md:w-[150px] md:w-[250px] h-12 rounded-lg text-lg font-semibold`}
      >
        Skills
      </Button>
    </div>
  );
};
