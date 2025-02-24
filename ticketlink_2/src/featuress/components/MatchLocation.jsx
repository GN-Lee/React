const MatchLocation = (props) => {
  const { LocationText } = props;
  return (
    <div
      style={{
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        fontWeight: "700",
      }}
    >
      {LocationText}
    </div>
  );
};

export default MatchLocation;
