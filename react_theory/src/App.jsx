import Service from "./Service";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaCar } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiAirBalloon } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";

function App() {
  const ServiceList = [
    { icon: <HiOutlineBuildingOffice />, name: "호텔" },
    { icon: <FaCar />, name: "렌트카" },
    { icon: <MdOutlineShoppingBag />, name: "쇼핑" },
    { icon: <GiAirBalloon />, name: "여가" },
    { icon: <FaRegCreditCard />, name: "신용" },
    { icon: <FaWifi />, name: "와이파이" },
  ];

  return (
    <article style={{ display: "flex", gap: "20px" }}>
      {ServiceList.map((v) => (
        <Service {...v} />
      ))}
    </article>
  );
}

export default App;
