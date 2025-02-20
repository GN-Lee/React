const Button = () => {
  const isIce = false;
  const makeHI = () => `끼룩`;

  return (
    <button
      className={isIce ? "ice" : "fire"}
      style={{ color: isIce ? "blue" : "red" }}
    >
      {isIce ? "얼음" : makeHI()}
    </button>
  );
};

export default Button;
