import {
  TableContainer,
  Tbody,
  Td,
  Table as ChakraTable,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Table = () => {
  return (
    <TableContainer>
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            <Th isNumeric>Serial</Th>
            <Th>Examiner</Th>
            <Th>Mark</Th>
            <Th>Duration</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td isNumeric>8</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
