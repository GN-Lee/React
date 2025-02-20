const Service = (props) => {
  const style = {
    conatainer: { display: "flex", gap: "20px", alignItems: "center" },
    box: { display: "flex", flexDirection: "column", gap: "10px" },
    btn: { padding: "10px", borderRadius: "9999px", backgroundColor: "white" },
  };

  return (
    <>
      <div style={style.box}>
        <button style={style.btn}>{props.icon}</button>
        <p>{props.name}</p>
      </div>
    </>
  );
};

export default Service;
