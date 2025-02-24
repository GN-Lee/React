import BaseText from "./text/BaseText";

const DateText = (props) => {
  const { text, fontSize } = props;
  return <BaseText text={text} fontSize={fontSize} />;
};

export default DateText;
