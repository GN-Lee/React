const Price = (props) => {
  const { price } = props;
  return (
    <div>
      <h3 style={{ fontSize: "30px" }}>{price}원</h3>
    </div>
  );
};

export default Price;
