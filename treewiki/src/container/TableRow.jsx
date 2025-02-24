import TableData from "../component/TableData";
import TableHeader from "../component/TableHeader";

const TableRow = (props) => {
  const { header, content } = props;

  return (
    <tr>
      <TableHeader {...header} />
      <TableData {...content} />
    </tr>
  );
};

export default TableRow;
