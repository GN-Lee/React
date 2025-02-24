import TableRow from "./TableRow";

const TableBody = () => {
  const css = { backgroundColor: "skyblue", color: "white" };
  const arr = [
    {
      content: { data: ["우현서"] },
      header: {
        headerName: "이름",
        ...css,
      },
    },
    {
      content: { data: ["01년생"] },
      header: {
        headerName: "나이",
        ...css,
      },
    },
    {
      content: { data: ["현서핑"] },
      header: {
        headerName: "별명",
        ...css,
      },
    },
  ];
  return (
    <tbody>
      {arr.map((v) => (
        <TableRow {...v} />
      ))}
    </tbody>
  );
};

export default TableBody;
