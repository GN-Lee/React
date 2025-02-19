import "./Icecream.css";

const IcecreamList = () => {
  return (
    <>
      <ul className="baskinrabins">
        <li>
          <img
            src="	https://www.baskinrobbins.co.kr/upload/product/main/7d1637a8d51cae0806ecb565eacc524e.png"
            alt=""
          />
          <p>저니 오브 모나크</p>
        </li>
        <li>
          <img
            src="	https://www.baskinrobbins.co.kr/upload/product/main/eec8cef386cf6697768a89b384c07bf7.png"
            alt=""
          />
          <p>애플 민트</p>
        </li>
        <li>
          <img
            src="	https://www.baskinrobbins.co.kr/upload/product/main/a4b71e8b99743c93a7824331850b0a3d.png"
            alt=""
          />
          <p>슈팅 스타</p>
        </li>
      </ul>
    </>
  );
};

export default IcecreamList;
