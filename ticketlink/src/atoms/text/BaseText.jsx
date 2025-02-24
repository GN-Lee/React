const BaseText = (props) => {
  const { text, fontSize,color,fontWeight } = props;
  return <span>{text},{fontSize}</span>;
};

export default BaseText;
