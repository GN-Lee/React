import Stack from "./Stack";

const MatchDay = (props) => {
  const { text, style, size, text1, text2 } = props;
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <h2 style={size}>{text}</h2>
      <Stack>
        <p style={style}>{text1}</p>
        <p style={style}>{text2}</p>
      </Stack>
    </div>
  );
};

export default MatchDay;
