import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const applyStyles = (baseClass, darkModeClass, isDarkMode) =>
  `${baseClass} ${isDarkMode ? darkModeClass : ""}`;

const Stat = ({ title, value, isDarkMode }) => (
  <div className="text-center xs:w-[120px] md:w-[148px]">
    <h1
      className={applyStyles(
        "font-semibold text-xl text-[#575757]",
        "text-[#C3C7CB]",
        isDarkMode
      )}
    >
      {value}
    </h1>
    <p
      className={applyStyles(
        "font-semibold text-lg text-[#575757]",
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
    <ul className="flex justify-center items-center p-5">
      <li>
        <Stat
          title="Years of work experience"
          value="2"
          isDarkMode={isDarkMode}
        />
      </li>
      <li>
        <Stat title="Completed Projects" value="4+" isDarkMode={isDarkMode} />
      </li>
      <li>
        <Stat
          title="Personal Side Projects"
          value="15+"
          isDarkMode={isDarkMode}
        />
      </li>
    </ul>
  );
};
