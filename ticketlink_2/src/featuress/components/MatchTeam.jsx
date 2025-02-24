const MatchTeam = (props) => {
  const { MatchTeamText, imgSrc1, imgSrc2 } = props;
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <img
        style={{ width: "60px", height: "60px", objectFit: "cover" }}
        src={imgSrc1}
        alt=""
      />
      <p style={{ color: "grey" }}>{MatchTeamText}</p>
      <img
        style={{ width: "60px", height: "60px", objectFit: "cover" }}
        src={imgSrc2}
        alt=""
      />
    </div>
  );
};

export default MatchTeam;
