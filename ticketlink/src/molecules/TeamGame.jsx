import VersusText from "../atoms/VersusText";
import BaseImg from "../atoms/image/BaseImg";

const TeamGame = () => {
  return (
    <div style={{ display: "flex" }}>
      <BaseImg />
      <VersusText text={"VS"} />
      <BaseImg />
    </div>
  );
};

export default TeamGame;
