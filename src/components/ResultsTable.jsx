import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ResultsTable = ({ savingsData }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table aria-label="results table">
        <TableHead>
          <TableRow>
            <TableCell>Mes</TableCell>
            <TableCell align="right">Ahorro (CLP)</TableCell>
            <TableCell align="right">Tasa de Cambio (CLP/mes)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {savingsData.map((row) => (
            <TableRow key={row.month}>
              <TableCell component="th" scope="row">
                {row.month}
              </TableCell>
              <TableCell align="right">{row.savings.toLocaleString('es-CL')}</TableCell>
              <TableCell align="right">{row.rateOfChange.toLocaleString('es-CL')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;
