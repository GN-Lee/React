import MatchDay from "../components/MatchDay";
import MatchTeam from "../components/MatchTeam";
import MatchRegion from "../components/MatchRegion";
import MatchLocation from "../components/MatchLocation";
import MatchTicket from "../components/MatchTicket";

const MatchSecond = () => {
  return (
    <article
      style={{
        display: "flex",
        gap: "50px",
        borderBottom: "1px solid #D9D9D9",
        justifyContent: "center",
      }}
    >
      <MatchDay
        size={{ fontSize: "30px" }}
        text={"03.29"}
        style={{ fontSize: "12px" }}
        text1={"(토)"}
        text2={"14:00"}
      />
      <MatchTeam
        imgSrc1={
          "https://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png"
        }
        imgSrc2={"https://image.toast.com/aaaaab/ticketlink/TKL_5/Daegu.png"}
        MatchTeamText={"VS"}
      />
      <MatchRegion RegionTeam1={"FC서울"} RegionTeam2={"대구"} />
      <MatchLocation LocationText={"서울월드컵경기장"} />
      <MatchTicket
        TicketDay={"2025.02.24 (월)"}
        TicketTime={"18:00 오픈예정"}
      />
    </article>
  );
};

export default MatchSecond;
