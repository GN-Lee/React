import Card from "./Card";
import { PiCoinsBold } from "react-icons/pi";
import { IoCard } from "react-icons/io5";
import { GiPaperBagOpen } from "react-icons/gi";
import { BsFillHandbagFill } from "react-icons/bs";

function App() {
  const list = [
    {
      mainTitle: "플렉스",
      subTitle: 294200,
      restSit: 9,
      money: <PiCoinsBold />,
      card: <IoCard />,
      carrier: <GiPaperBagOpen />,
      bag: <BsFillHandbagFill />,
      minPrice: 40000,
      maxPrice: 100000,
      outWeight: 15,
      inWeight: 10,
    },
    {
      mainTitle: "플렉스",
      subTitle: 294200,
      restSit: 9,
      money: <PiCoinsBold />,
      card: <IoCard />,
      carrier: <GiPaperBagOpen />,
      bag: <BsFillHandbagFill />,
      minPrice: 40000,
      maxPrice: 100000,
      outWeight: 15,
      inWeight: 10,
    },
    {
      mainTitle: "플렉스",
      subTitle: 294200,
      restSit: 9,
      money: <PiCoinsBold />,
      card: <IoCard />,
      carrier: <GiPaperBagOpen />,
      bag: <BsFillHandbagFill />,
      minPrice: 40000,
      maxPrice: 100000,
      outWeight: 15,
      inWeight: 10,
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {list.map((x) => (
        <Card {...x} />
      ))}
    </div>
  );
}

export default App;
