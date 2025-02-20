const Card = (props) => {
  const style = {
    cardArea: {
      width: "400px",
      borderRadius: "10px",
      border: "1px solid black",
    },
    cardContainer: {
      width: "100%",
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      borderBottom: "1px dot gray",
      backgroundColor: "black",
      color: "white",
      borderRadius: "10px",
    },
    title: { fonstWeight: "700" },
    krw: { marginBottom: "20px" },
    p: { marginBottom: "20px" },
    infoBox: {
      width: "100%",
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    icon: {
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <article style={style.cardArea}>
      <div style={style.cardContainer}>
        <h3 style={style.title}>{props.mainTitle}</h3>
        <strong style={style.krw}>KRW{props.subTitle}</strong>
        <p style={style.p}>{props.restSit}석</p>
      </div>
      <div style={style.infoBox}>
        <dl style={style.icon}>
          <dd>{props.money} 변경 수수료</dd>
          <dd>KRW {props.minPrice}</dd>
        </dl>
        <dl style={style.icon}>
          <dd>{props.card} 환불 위약금</dd>
          <dd>최대 KRW {props.maxPrice}</dd>
        </dl>
        <dl style={style.icon}>
          <dd>{props.carrier}무료 위탁 수하물</dd>
          <dd>{props.outWeight}kg</dd>
        </dl>
        <dl style={style.icon}>
          <dd>{props.bag}무료 기내 수화물</dd>
          <dd>{props.inWeight}kg</dd>
        </dl>
      </div>
    </article>
  );
};

export default Card;
