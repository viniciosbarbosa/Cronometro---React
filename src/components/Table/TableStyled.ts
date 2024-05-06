import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
`;

const TableHead = styled.thead`
  background-color: #028468;
  color: #ffffff;
  text-align: left;
  border-radius: 4px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

const TableBodyRow = styled.tr`
  background-color: #2f4f4f;
  color: #ffffff;
  font-weight: normal;
  transition: 0.3s;

  &:hover {
    background-color: #41444c;
  }
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  text-align: center;
`;

const TableCell = styled.td`
  padding: 12px 15px;
`;

export {
  StyledTable,
  TableHead,
  TableRow,
  TableBodyRow,
  TableHeader,
  TableCell,
};
