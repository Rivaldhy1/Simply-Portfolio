import { useContext } from "react";
import { Button } from "../elements/Button";
import { DarkMode } from "../../context/DarkMode";

export const ButtonBox = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className="flex items-center p-3">
      <Button
        className={`${
          isDarkMode ? "bg-[#0C151D] text-[#A3ABB2]" : "bg-[#D7D7D7]"
        } w-[240px] h-12 rounded-lg text-lg font-semibold text-[#3D3D3D]`}
      >
        Portfolio
      </Button>
      <Button
        className={`${
          isDarkMode ? "text-[#A3ABB2]" : "text-[#3D3D3D]"
        } bg-transparent w-[240px] h-12 rounded-lg  text-lg font-semibold`}
      >
        Skills
      </Button>
    </div>
  );
};
