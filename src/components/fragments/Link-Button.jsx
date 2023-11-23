import { useContext } from "react";
import { Button } from "../Button/Button";
import { DarkMode } from "../../context/DarkMode";

export const LinkButton = ({ icon }) => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className="flex items-center justify-between">
      <Button
        className={`w-[200px] h-12 rounded-lg text-[#3D3D3D] bg-[#FFE071] font-semibold text-lg`}
        icon={icon}
      >
        Download CV
      </Button>
      <Button
        className={`${
          isDarkMode
            ? "bg-[#171F26] text-[#A3ABB2]"
            : "bg-transparent text-[#3D3D3D]"
        } ml-7 w-[200px] h-12 rounded-lg text-lg font-semibold `}
      >
        Contact Me
      </Button>
    </div>
  );
};
