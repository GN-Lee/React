import BaseText from "./text/BaseText";
const DayText = (props) => {
  const { text, fontSize } = props;
  return <BaseText text={text} fontSize={fontSize} />;
};

export default DayText;
