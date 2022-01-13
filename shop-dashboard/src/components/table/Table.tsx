/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

type TIprops = {
  headers?: Array<string>;
  rows?: any;
};

const Table: React.FC<TIprops> = ({ headers, rows }) => {
  const TRow = ({ item }: any): any => {
    return Object.keys(item).map((key) => {
      if (headers && headers.includes(key)) {
        return <STD key={key}>{item[key]}</STD>;
      }
    });
  };

  return (
    <Box>
      <STable>
        <SHeader>
          <tr>
            {headers &&
              headers.length > 0 &&
              headers.map((header, index) => {
                return <th key={index}>{header}</th>;
              })}
          </tr>
        </SHeader>
        <tbody>
          {rows &&
            rows.length > 0 &&
            rows.map((row, index) => {
              return (
                <STRow key={index}>
                  <TRow key={index} item={{ ...row }} />
                </STRow>
              );
            })}
        </tbody>
      </STable>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Pagination count={10} page={1} onChange={() => console.log('will change here')} />
      </Box>
    </Box>
  );
};
const STable = styled.table`
  width: 100%;
  margin-left: 20px;
  border-spacing: 0;
`;

const SHeader = styled.thead`
  background: #f7f8f9;
  padding: 15px;
  th {
    padding: 15px;
  }
`;

const STRow = styled.tr`
  :hover {
    background: green;
    cursor: pointer;
  }
  text-align: center;
  padding: 5px;
`;

const STD = styled.td`
  padding: 10px;
`;
export default Table;
