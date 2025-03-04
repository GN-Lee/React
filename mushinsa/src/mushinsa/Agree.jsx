const Agree = (props) => {
  const { text, necessary } = props;

  return (
    <>
      <div style={{ display: "flex", gap: "15px" }}>
        <input type="checkbox" />
        <p>{text}</p>
        <p>{necessary ? "(필수)" : "(선택)"}</p>
      </div>
    </>
  );
};

export default Agree;
