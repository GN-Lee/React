const Stack = (props) => {
  const { children } = props;

  return (
    <span style={{ display: "flex", flexDirection: "column" }}>{children}</span>
  );
};

export default Stack;
