import { SkillsIcon } from "../elements/Skills";

export const SkillsBoxContents = () => {
  return (
    <div className="box-border md:w-auto h-auto gap-5 md:gap-2 grid w-[360px] place-items-center justify-items-center mx-auto grid-cols-3 md:grid-cols-4">
      <SkillsIcon src={"/skills-icon/js.svg"} />
      <SkillsIcon src={"/skills-icon/twl.svg"} />
      <SkillsIcon src={"/skills-icon/nodejs.svg"} />
      <SkillsIcon src={"/skills-icon/html.svg"} />
      <SkillsIcon src={"/skills-icon/html.svg"} />
      <SkillsIcon src={"/skills-icon/html.svg"} />
      <SkillsIcon src={"/skills-icon/html.svg"} />
      <SkillsIcon src={"/skills-icon/html.svg"} />
    </div>
  );
};
