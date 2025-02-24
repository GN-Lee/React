import MonthlyText from "./molecules/MonthlyText";
import TeamGame from "./molecules/TeamGame";

function App() {
  return (
    <article style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <MonthlyText />
      <TeamGame />
    </article>
  );
}

export default App;
