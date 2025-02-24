import BaseText from "./text/BaseText";

const TimeText = (props) => {
  const { text, fontSize } = props;
  return <BaseText text={text} fontSize={fontSize} />;
};

export default TimeText;
