import {
  StyledTable,
  TableBodyRow,
  TableCell,
  TableHead,
  TableHeader,
} from "./TableStyled";
import { DataTables } from "../../interface/DatasTable";

const Table = ({ dataTableList }: { dataTableList: DataTables[] }) => {
  return (
    <StyledTable>
      <TableHead>
        <tr>
          <TableHeader>Data da contagem</TableHeader>
          <TableHeader>Tempo</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {dataTableList.map((item, index) => (
          <TableBodyRow key={index}>
            <TableCell>{item.data}</TableCell>
            <TableCell>{item.time} Segundos</TableCell>
          </TableBodyRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
