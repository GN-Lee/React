const Buttons = () => {
  return (
    <article>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100px",
        }}
      >
        <button
          style={{
            backgroundColor: "white",
            border: "1px solid blue",
            borderRadius: "10px",
            color: "blue",
            padding: "10px 17px",
          }}
        >
          바로보기
        </button>
        <button
          style={{
            backgroundColor: "blue",
            border: "none",
            borderRadius: "10px",
            color: "white",
            padding: "10px 17px",
          }}
        >
          다운로드
        </button>
      </div>
    </article>
  );
};

export default Buttons;
