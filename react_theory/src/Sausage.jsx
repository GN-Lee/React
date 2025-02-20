const Sausage = (props) => {
  return (
    <button style={{ color: props.color || "pink" }}>
      {props.name || "군필"} 소세지
    </button>

    /* <button style={{ color: props.color == null ? "pink" : props.color }}>
    {props.name == null ? "군필" : props.name} 소세지
    </button> */
  );
};

export default Sausage;
