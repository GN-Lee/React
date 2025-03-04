import { useState } from "react";
import Agree from "./Agree";
import Button from "./Button";

const Agreement = () => {
  const [check, setCheck] = useState([
    { text: "만 14세 이상입니다.", necessary: true, isCheck: false },
    {
      text: "무신사, 무신사 스토어 이용 약관",
      necessary: true,
      isCheck: false,
    },
    { text: "마케팅 정보 수신 동의", necessary: false, isCheck: false },
    { text: "광고성 정보 수신 동의", necessary: false, isCheck: false },
  ]);
  const click = (i) =>
    setCheck((prev) => {
      const newArr = [...prev];
      newArr[i].isCheck = !newArr[i].isCheck;
      return newArr;
    });

  return (
    <>
      <article
        style={{ display: "flex", flexDirection: "column", width: "500px" }}
      >
        {check.map((v, i) => (
          <Agree {...v} necessaryButton={() => click(i)} />
        ))}
      </article>
      <Button
        necessaryButton={check
          .filter((v) => v.necessary)
          .every((v) => v.isCheck)}
        text={"HI my name is siri"}
      />
    </>
  );
};

export default Agreement;
