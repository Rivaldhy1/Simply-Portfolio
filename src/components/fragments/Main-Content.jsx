import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

export const MainContent = () => {
  return (
    <div className="md:flex items-center">
      <Img src={"../yunjinseng.jpg"} />
      <Name />
    </div>
  );
};

const Img = ({ src }) => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`mx-auto rounded-full w-[135px] h-[135px] ${
        isDarkMode ? "xs:max-md:bg-transparent md:bg-white" : "bg-white"
      } border-2 border-yellow-300 hover:shadow-md cursor-pointer`}
    >
      <img
        src={src}
        alt="gambar istri"
        className="w-[135px] h-[135px] rounded-full p-1 border-2 border-yellow-300"
      />
    </div>
  );
};

const Name = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className="xs:max-md:mt-5 xs:max-md:text-center md:ml-[30px]">
      <h1
        className={`font-semibold text-3xl text-[#3D3D3D] ${
          isDarkMode && "text-[#F1F2F4]"
        }`}
      >
        Rivaldhy Rizki A.
      </h1>
      <p
        className={`pt-[8px] font-semibold text-[#575757] text-md ${
          isDarkMode && "text-[#A3ABB2] "
        }`}
      >
        Software Engineer
      </p>

      <div className="flex pt-[6px] items-center xs:max-md:justify-center xs:max-md:pt-[10px]">
        <a
          href="https://www.instagram.com/arrival1l/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/insta.svg" alt="instagram Img" className="icon " />
        </a>
        <a
          href="https://www.tiktok.com/@aaubertt"
          target="_blank"
          rel="noreferrer"
          className="icon-gap"
        >
          <img src="/tiktok.svg" alt="tiktok Img" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/rivaldhy-rizki-akbar-7b0ba2284/"
          target="_blank"
          rel="noreferrer"
          className="icon-gap"
        >
          <img src="/linkedin.svg" alt="LinkedIn Img" className="w-7 h-7 " />
        </a>
        <a
          href="https://github.com/Rivaldhy1"
          target="_blank"
          rel="noreferrer"
          className="icon-gap"
        >
          <img src="/github.svg" alt="Github img" className="icon" />
        </a>
      </div>
    </div>
  );
};
