import DateText from "../atoms/DateText";
import DayText from "../atoms/DayText";
import TimeText from "../atoms/TimeText";

const MonthlyText = (props) => {
  return (
    <div style={{ display: "flex", padding: "15px 5px" }}>
      <DateText text={"03.01"} fontSize={"40px"} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DayText text={"(토)"} fontSize={"14px"} />
        <TimeText text={"14:00"} fontSize={"18px"} />
      </div>
    </div>
  );
};

export default MonthlyText;
