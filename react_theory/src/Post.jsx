const Post = (props) => {
  return (
    <dl
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        justifyContent: "center",
      }}
    >
      <dd style={{ margin: 0 }}>{props.postNum}</dd>
      <dt>{props.postName}</dt>
    </dl>
  );
};

export default Post;
