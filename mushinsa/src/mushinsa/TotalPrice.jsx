import { useState } from "react";
import Price from "./Price";
import Amount from "./Amount";

const TotalPrice = () => {
  const [changeAmount, setChangeAmount] = useState([
    { price: 15000, cnt: 0, maxCount: 12 },
    { price: 30000, cnt: 0, maxCount: 3 },
    { price: 10000, cnt: 0 },
  ]);
  const plus = (i) =>
    setChangeAmount((prev) => {
      const newArr = [...prev];
      const { cnt, maxCount } = newArr[i];
      newArr[i].cnt = cnt == maxCount ? cnt : cnt + 1;
      return newArr;
    });
  const minus = (i) =>
    setChangeAmount((prev) => {
      const newArr = [...prev];
      newArr[i].cnt = newArr[i].cnt == 0 ? 0 : newArr[i].cnt - 1;
      return newArr;
    });
  const reset = (i) => {
    setChangeAmount((prev) => {
      const newArr = [...prev];
      return newArr.map((v) => ({ ...v, cnt: 0 }));
    });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {changeAmount.map((v, i) => (
          <>
            <Price price={v.price * v.cnt} />
            <Amount cnt={v.cnt} plus={() => plus(i)} minus={() => minus(i)} />
          </>
        ))}
      </div>
      <span>
        총액:{changeAmount.map((v) => v.price * v.cnt).reduce((a, c) => a + c)}
      </span>
      <button onClick={reset}>태초마을로!!!!!</button>
    </>
  );
};

export default TotalPrice;
