const Price = (props) => {
  const { priceOrigin, priceSale } = props;
  const discountPrice = (priceOrigin * (100 - priceSale)) / 100;
  const krwPrcie = discountPrice * 1400;

  const style = {
    origin: { color: "grey", textDecoration: "line-through" },
    discount: { color: "red", fontSize: "20px" },
    krw: { color: "gray" },
  };

  return (
    <dl style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <dd style={style.origin}>{priceOrigin}</dd>
      <dt style={style.discount}>{discountPrice}</dt>
      <dd style={style.krw}>{krwPrcie}</dd>
    </dl>
  );
};

export default Price;
