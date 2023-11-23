import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const applyStyles = (baseClass, darkModeClass, isDarkMode) =>
  `${baseClass} ${isDarkMode ? darkModeClass : ""}`;

const Stat = ({ title, value, isDarkMode }) => (
  <div className="text-center w-[148px]">
    <h1
      className={applyStyles(
        "font-semibold text-xl text-[#575757]",
        "text-[#A3ABB2]",
        isDarkMode
      )}
    >
      {value}
    </h1>
    <p
      className={applyStyles(
        "font-medium text-lg text-[#575757]",
        "text-[#A3ABB2]",
        isDarkMode
      )}
    >
      {title}
    </p>
  </div>
);

export const AboutContent = () => {
  const { isDarkMode } = useContext(DarkMode);

  return (
    <ul className="p-5 flex justify-between items-center">
      <li>
        <Stat
          title="Years of work experience"
          value="2"
          isDarkMode={isDarkMode}
        />
      </li>
      <li>
        <Stat title="Completed Projects" value="15+" isDarkMode={isDarkMode} />
      </li>
      <li>
        <Stat title="Satisfied Customer" value="4+" isDarkMode={isDarkMode} />
      </li>
    </ul>
  );
};
