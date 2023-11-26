import { Box } from "../elements/Box";

export const BoxContents = () => {
  return (
    <div className="box-border w-auto h-auto grid gap-6 place-items-center md:grid-cols-2 sm:grid-cols-1">
      <Box src={"/1.png"} alt={"Payment Project"} />
      <Box src={"/2.png"} alt={"Fav Komik Project"} />
      <Box src={"/3.png"} alt={"Login Project"} />
      <Box src={"/4.png"} alt={"Portfolio Project"} />
    </div>
  );
};
