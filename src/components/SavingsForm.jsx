import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography, Alert } from '@mui/material';
import { formatNumber, parseNumber } from '../utils/numberFormat';
import '../index.css';

const SavingsForm = ({ onSubmit }) => {
  const [salary, setSalary] = useState('');
  const [expenses, setExpenses] = useState('');
  const [time, setTime] = useState('');
  const [percentage, setPercentage] = useState(20); // Porcentaje por defecto
  const [error, setError] = useState('');

  useEffect(() => {
    setSalary('');
    setExpenses('');
    setTime('');
    setPercentage(20);
  }, [onSubmit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedSalary = parseNumber(salary);
    const parsedExpenses = parseNumber(expenses);
    const parsedTime = parseNumber(time);
    const parsedPercentage = parseNumber(percentage) / 100;

    if (isNaN(parsedSalary) || isNaN(parsedExpenses) || isNaN(parsedTime) || isNaN(parsedPercentage) || parsedSalary <= 0 || parsedExpenses < 0 || parsedTime <= 0 || parsedPercentage <= 0 || parsedPercentage > 1) {
      setError('Por favor, ingrese valores válidos.');
    } else {
      setError('');
      const formValues = {
        salary: parsedSalary,
        expenses: parsedExpenses,
        time: parsedTime,
        percentage: parsedPercentage
      };
      onSubmit(formValues);
    }
  };

  const handleFormat = (setter) => (e) => {
    const value = e.target.value.replace(/\./g, '');
    if (!isNaN(value) && value !== '') {
      setter(formatNumber(value));
    } else {
      setter(e.target.value);
    }
  };

  return (
    <Paper elevation={3} className="paper">
      <Typography variant="h5" gutterBottom>
        Ingrese los Datos para su Plan de Ahorro
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Salario Mensual (CLP)"
          variant="outlined"
          value={salary}
          onChange={handleFormat(setSalary)}
          fullWidth
          margin="normal"
          error={!!error}
        />
        <TextField
          label="Gastos Mensuales (CLP)"
          variant="outlined"
          value={expenses}
          onChange={handleFormat(setExpenses)}
          fullWidth
          margin="normal"
          error={!!error}
        />
        <TextField
          label="Tiempo (meses)"
          variant="outlined"
          value={time}
          onChange={handleFormat(setTime)}
          fullWidth
          margin="normal"
          error={!!error}
        />
        <TextField
          label="Porcentaje a Ahorrar (%)"
          variant="outlined"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          fullWidth
          margin="normal"
          error={!!error}
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Calcular
        </Button>
      </form>
    </Paper>
  );
};

export default SavingsForm;
