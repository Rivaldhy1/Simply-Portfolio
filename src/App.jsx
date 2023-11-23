import { useContext } from "react";
import { DarkMode } from "./context/DarkMode";
import { AboutContent } from "./components/fragments/About-Content";
import { LinkButton } from "./components/fragments/link-button";
import { ButtonBox } from "./components/fragments/ButtonBox";

const downloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 28 24"
    fill="none"
  >
    <path
      d="M21.5189 20H5.78098C5.48284 20 5.19691 20.1054 4.9861 20.2929C4.77528 20.4804 4.65685 20.7348 4.65685 21C4.65685 21.2652 4.77528 21.5196 4.9861 21.7071C5.19691 21.8946 5.48284 22 5.78098 22H21.5189C21.8171 22 22.103 21.8946 22.3138 21.7071C22.5246 21.5196 22.6431 21.2652 22.6431 21C22.6431 20.7348 22.5246 20.4804 22.3138 20.2929C22.103 20.1054 21.8171 20 21.5189 20ZM12.8518 17.71C12.9587 17.801 13.0848 17.8724 13.2228 17.92C13.3573 17.9729 13.5028 18.0002 13.6499 18.0002C13.7971 18.0002 13.9426 17.9729 14.0771 17.92C14.2151 17.8724 14.3412 17.801 14.4481 17.71L18.9446 13.71C19.1563 13.5217 19.2752 13.2663 19.2752 13C19.2752 12.7337 19.1563 12.4783 18.9446 12.29C18.733 12.1017 18.4459 11.9959 18.1465 11.9959C17.8471 11.9959 17.56 12.1017 17.3484 12.29L14.7741 14.59V3C14.7741 2.73478 14.6557 2.48043 14.4448 2.29289C14.234 2.10536 13.9481 2 13.6499 2C13.3518 2 13.0659 2.10536 12.8551 2.29289C12.6442 2.48043 12.5258 2.73478 12.5258 3V14.59L9.95153 12.29C9.84672 12.1968 9.72229 12.1228 9.58535 12.0723C9.4484 12.0219 9.30162 11.9959 9.1534 11.9959C9.00517 11.9959 8.85839 12.0219 8.72145 12.0723C8.5845 12.1228 8.46007 12.1968 8.35526 12.29C8.25045 12.3832 8.1673 12.4939 8.11058 12.6158C8.05386 12.7376 8.02466 12.8681 8.02466 13C8.02466 13.1319 8.05386 13.2624 8.11058 13.3842C8.1673 13.5061 8.25045 13.6168 8.35526 13.71L12.8518 17.71Z"
      fill="#3D3D3D"
    />
  </svg>
);

function App() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`h-auto grid place-items-center  ${
        isDarkMode ? "bg-[#0C151D]" : "bg-[#E9EBEC]"
      }`}
    >
      {/* DarkMode button */}
      <button
        className={`mt-[22px] w-11 h-11 ${
          isDarkMode ? "bg-[#171F26]" : "bg-white"
        } rounded-full flex items-center justify-center hover:shadow-md ease-in-out`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 13.3333C19.558 13.3333 19.1341 13.5089 18.8215 13.8215C18.5089 14.134 18.3333 14.558 18.3333 15C18.3333 15.442 18.5089 15.8659 18.8215 16.1785C19.1341 16.4911 19.558 16.6667 20 16.6667C20.8841 16.6667 21.7319 17.0179 22.357 17.643C22.9821 18.2681 23.3333 19.1159 23.3333 20C23.3333 20.8841 22.9821 21.7319 22.357 22.357C21.7319 22.9821 20.8841 23.3333 20 23.3333C19.558 23.3333 19.1341 23.5089 18.8215 23.8215C18.5089 24.134 18.3333 24.558 18.3333 25C18.3333 25.442 18.5089 25.8659 18.8215 26.1785C19.1341 26.4911 19.558 26.6667 20 26.6667C21.7681 26.6667 23.4638 25.9643 24.714 24.714C25.9643 23.4638 26.6667 21.7681 26.6667 20C26.6667 18.2319 25.9643 16.5362 24.714 15.286C23.4638 14.0357 21.7681 13.3333 20 13.3333ZM36.1833 18.8167L32.2667 15V9.4C32.2667 8.95797 32.0911 8.53405 31.7785 8.22149C31.466 7.90893 31.042 7.73333 30.6 7.73333H25.0833L21.1833 3.81667C21.0284 3.66045 20.8441 3.53646 20.641 3.45185C20.4379 3.36723 20.22 3.32367 20 3.32367C19.78 3.32367 19.5621 3.36723 19.359 3.45185C19.1559 3.53646 18.9716 3.66045 18.8167 3.81667L15 7.73333H9.4C8.95797 7.73333 8.53405 7.90893 8.22149 8.22149C7.90893 8.53405 7.73333 8.95797 7.73333 9.4V15L3.81667 18.8167C3.66045 18.9716 3.53646 19.1559 3.45185 19.359C3.36723 19.5621 3.32367 19.78 3.32367 20C3.32367 20.22 3.36723 20.4379 3.45185 20.641C3.53646 20.8441 3.66045 21.0284 3.81667 21.1833L7.73333 25.0833V30.6C7.73333 31.042 7.90893 31.4659 8.22149 31.7785C8.53405 32.0911 8.95797 32.2667 9.4 32.2667H15L18.9 36.1833C19.0549 36.3395 19.2393 36.4635 19.4424 36.5481C19.6455 36.6328 19.8633 36.6763 20.0833 36.6763C20.3034 36.6763 20.5212 36.6328 20.7243 36.5481C20.9274 36.4635 21.1117 36.3395 21.2667 36.1833L25.1667 32.2667H30.6833C31.1254 32.2667 31.5493 32.0911 31.8618 31.7785C32.1744 31.4659 32.35 31.042 32.35 30.6V25.0833L36.2667 21.1833C36.4176 21.023 36.5352 20.8343 36.6127 20.6282C36.6902 20.4221 36.7262 20.2027 36.7184 19.9826C36.7107 19.7626 36.6594 19.5462 36.5676 19.3461C36.4757 19.146 36.3451 18.966 36.1833 18.8167ZM29.4333 23.2167C29.2759 23.371 29.1506 23.5551 29.0647 23.7582C28.9789 23.9613 28.9343 24.1795 28.9333 24.4V28.9333H24.4C24.1795 28.9342 23.9613 28.9789 23.7582 29.0647C23.5551 29.1506 23.371 29.2759 23.2167 29.4333L20 32.65L16.7833 29.4333C16.629 29.2759 16.4449 29.1506 16.2418 29.0647C16.0387 28.9789 15.8205 28.9342 15.6 28.9333H11.0667V24.4C11.0658 24.1795 11.0211 23.9613 10.9353 23.7582C10.8494 23.5551 10.7241 23.371 10.5667 23.2167L7.35 20L10.5667 16.7833C10.7241 16.629 10.8494 16.4449 10.9353 16.2418C11.0211 16.0386 11.0658 15.8205 11.0667 15.6V11.0667H15.6C15.8205 11.0658 16.0387 11.0211 16.2418 10.9353C16.4449 10.8494 16.629 10.7241 16.7833 10.5667L20 7.35L23.2167 10.5667C23.371 10.7241 23.5551 10.8494 23.7582 10.9353C23.9613 11.0211 24.1795 11.0658 24.4 11.0667H28.9333V15.6C28.9343 15.8205 28.9789 16.0386 29.0647 16.2418C29.1506 16.4449 29.2759 16.629 29.4333 16.7833L32.65 20L29.4333 23.2167Z"
            fill={`${isDarkMode ? "#A3ABB2" : "#3D3D3D"}`}
          />
        </svg>
      </button>

      {/* Header Content */}
      <section className="mt-[45px] flex items-center">
        <div className="rounded-full bg-white border-2 border-yellow-300 hover:shadow-md cursor-pointer">
          <img
            src="yunjinseng.jpg"
            alt="gambar istri"
            className="w-[135px] h-[135px] rounded-full p-1 border-2 border-yellow-300"
          />
        </div>
        <div className="pl-[30px]">
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

          <div className="flex pt-[6px] items-center">
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
              <img
                src="/linkedin.svg"
                alt="LinkedIn Img"
                className="w-7 h-7 "
              />
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
      </section>

      {/* About Content */}
      <section className="mt-[18px] w-auto h-auto">
        <AboutContent />
      </section>

      {/* Cv / Contact Button */}
      <section className="mt-4">
        <LinkButton icon={downloadIcon} />
      </section>

      {/* Portfolio / Skills Button */}
      <section
        className={`mt-14 rounded-xl ${
          isDarkMode ? "bg-[#171F26]" : "bg-white"
        }`}
      >
        <ButtonBox />
      </section>

      {/* Project Content */}
      <section className="m-8 max-w-lg">
        <div className="grid gap-4 grid-cols-2">
          <div className="box-content">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
          <div className="box-content">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
          <div className="box-content">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
          <div className="box-content">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
          <div className="box-content">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
          <div className="box-content">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="my-10">
        <p className="text-center text-[#575757] font-medium ">
          © Rivaldhy Rizki Akbar. 2023 All rigths reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
