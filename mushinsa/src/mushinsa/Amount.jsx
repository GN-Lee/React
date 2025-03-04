const Amount = (props) => {
  const { cnt, minus, plus } = props;
  return (
    <button
      style={{
        display: "flex",
        backgroundColor: "white",
        border: "1px solid gray",
        borderRadius: "5px",
        width: "fit-content",
        gap: "20px",
      }}
    >
      <p onClick={minus}>-</p>
      <p>{cnt}</p>
      <p onClick={plus}>+</p>
    </button>
  );
};

export default Amount;
