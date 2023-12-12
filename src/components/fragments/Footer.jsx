import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const dateReserved = () => {
  const date = new Date();
  const today = date.getFullYear();
  return today;
};

export const Footer = () => {
  const { isDarkMode } = useContext(DarkMode);

  return (
    <footer className="my-10">
      <p
        className={` ${
          isDarkMode ? "text-[#A3ABB2]" : "text-[#575757]"
        } text-center font-medium`}
      >
        © Rivaldhy Rizki Akbar. {dateReserved()} All Rigths Reserved
      </p>
    </footer>
  );
};
