import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const HistoryList = ({ history, onHistoryClick }) => {
  return (
    <Paper elevation={3} className="paper" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Historial de Datos Ingresados
      </Typography>
      <List>
        {history.map((item, index) => (
          <ListItem button key={index} onClick={() => onHistoryClick(item)}>
            <ListItemText
              primary={`Salario: CLP ${item.salary.toLocaleString('es-CL')}, Gastos: CLP ${item.expenses.toLocaleString('es-CL')}, Tiempo: ${item.time} meses, Porcentaje: ${item.percentage * 100}%`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default HistoryList;
