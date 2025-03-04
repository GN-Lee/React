const Button = (props) => {
  const { text, necessaryButton } = props;
  return (
    <>
      <button
        onClick={() => (necessaryButton ? alert("pass") : alert("error"))}
        style={{
          width: "400px",
          padding: "10px",
          color: necessaryButton ? "red" : "gray",
          backgroundColor: necessaryButton ? "#efefef" : "white",
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
