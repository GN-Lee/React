const MatchRegion = (props) => {
  const { RegionTeam1, RegionTeam2 } = props;
  return (
    <div
      style={{
        display: "flex",
        fontWeight: "700",
        gap: "10px",
        marginRight: "80px",
        alignItems: "center",
      }}
    >
      <p>{RegionTeam1}</p>
      <p>VS</p>
      <p>{RegionTeam2}</p>
    </div>
  );
};

export default MatchRegion;
