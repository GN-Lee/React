const TableData = (props) => {
  const { data } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((x) => (
        <td>{x}</td>
      ))}
    </div>
  );
};

export default TableData;
