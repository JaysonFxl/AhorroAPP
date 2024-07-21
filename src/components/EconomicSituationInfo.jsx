import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const EconomicSituationInfo = () => {
  return (
    <Paper elevation={3} className="paper" style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Situación Económica
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Buena"
            secondary="Una situación económica 'Buena' significa que sus gastos son menos del 50% de su salario. Esto indica que tiene un buen control sobre sus finanzas y puede ahorrar significativamente."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Estable"
            secondary="Una situación económica 'Estable' significa que sus gastos están entre el 50% y el 70% de su salario. Esto indica que está manejando sus finanzas de manera adecuada, pero puede haber margen para mejorar su ahorro."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Crítica"
            secondary="Una situación económica 'Crítica' significa que sus gastos son más del 70% de su salario. Esto indica que puede estar en riesgo financiero y necesita evaluar y reducir sus gastos para mejorar su ahorro."
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default EconomicSituationInfo;
