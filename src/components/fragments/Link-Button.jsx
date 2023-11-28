import { useContext } from "react";
import { Button } from "../elements/Button";
import { DarkMode } from "../../context/DarkMode";

export const LinkButton = ({ icon }) => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className="flex items-center justify-center">
      <Button
        className={`xs:max-sm:w-[170px] w-[200px] h-12 xs:max-sm:rounded-xl rounded-lg text-[#3D3D3D] bg-[#FFE071] font-semibold xs:max-sm:text-base text-lg`}
        icon={icon}
      >
        Download CV
      </Button>
      <Button
        className={`${
          isDarkMode ? "bg-[#171F26] text-[#A3ABB2]" : "bg-white text-[#3D3D3D]"
        } xs:max-sm:ml-3 ml-7 xs:max-sm:w-[170px] w-[200px] h-12 xs:max-sm:rounded-xl rounded-lg xs:max-sm:text-base text-lg font-semibold `}
      >
        Contact Me
      </Button>
    </div>
  );
};
