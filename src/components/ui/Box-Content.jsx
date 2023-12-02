import { useState } from "react";
import { PortfolioContents } from "../fragments/Portfolio-Content";
import { SkillsBoxContents } from "../fragments/Skills-Content";
import { ButtonBox } from "../fragments/ButtonBox";

export const BoxContent = () => {
  const [active, setActive] = useState("Portfolio");
  return (
    <>
      <section className="mt-14">
        <ButtonBox active={active} setActive={setActive} />
      </section>
      <section className="my-10">
        {active === "Portfolio" && <PortfolioContents />}
        {active === "Skills" && <SkillsBoxContents />}
      </section>
    </>
  );
};
