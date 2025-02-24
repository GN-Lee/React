const MatchTicket = (props) => {
  const { TicketDay, TicketTime } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0px 30px",
        backgroundColor: "#D9D9D9",
        border: "1px solid none",
        borderRadius: "10px",
        marginLeft: "50px",
        fontWeight: "600",
      }}
    >
      <p>{TicketDay}</p>
      <p>{TicketTime}</p>
    </div>
  );
};

export default MatchTicket;
