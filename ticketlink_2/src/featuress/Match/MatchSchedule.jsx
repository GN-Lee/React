import Match from "./Match";
import MatchSecond from "./MatchSecond";

const MatchSechdule = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        flexDirection: "column",
      }}
    >
      <Match />
      <MatchSecond />
      <Match />
      <MatchSecond />
      <Match />
      <MatchSecond />
    </div>
  );
};

export default MatchSechdule;
