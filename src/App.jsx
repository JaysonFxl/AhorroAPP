import React, { useState } from 'react';
import { Container, CssBaseline, Grid } from '@mui/material';
import Header from './components/Header';
import SavingsForm from './components/SavingsForm';
import Results from './components/Results';
import Footer from './components/Footer';
import EconomicSituationInfo from './components/EconomicSituationInfo';
import HistoryList from './components/HistoryList';
import './index.css';
import { logisticFunction, logisticDerivative, logisticLimit, criticalPoints, horizontalAsymptote } from './utils/mathFunctions';

const App = () => {
  const [savingsPlan, setSavingsPlan] = useState(null);
  const [history, setHistory] = useState([]);

  const calculateSavings = (plan) => {
    const { salary, expenses, time, percentage } = plan;
    const savings = Math.floor((salary * time - expenses * time) * percentage);
    const optimalPercentage = calculateOptimalPercentage(salary, expenses);
    const economicSituation = determineEconomicSituation(salary, expenses);

    // Parámetros para la función logística
    const L = logisticLimit(salary * time * percentage);
    const k = 0.1; // Tasa de crecimiento
    const x0 = time / 2; // Punto de inflexión en la mitad del tiempo

    const savingsData = Array.from({ length: time }, (_, index) => ({
      month: index + 1,
      savings: Math.floor(logisticFunction(index + 1, L, k, x0)),
      rateOfChange: logisticDerivative(index + 1, L, k, x0)
    }));

    return {
      monthlySavings: Math.floor(savings / time),
      totalSavings: savings,
      time: time,
      optimalPercentage: optimalPercentage,
      economicSituation: economicSituation,
      savingsData: savingsData,
      criticalPoint: criticalPoints(L, k, x0),
      horizontalAsymptote: horizontalAsymptote(L)
    };
  };

  const calculateOptimalPercentage = (salary, expenses) => {
    if (salary <= expenses) {
      return 0;
    } else {
      return Math.floor(((salary - expenses) / salary) * 100);
    }
  };

  const determineEconomicSituation = (salary, expenses) => {
    const ratio = expenses / salary;
    if (ratio > 0.7) {
      return 'Crítica';
    } else if (ratio > 0.5) {
      return 'Estable';
    } else {
      return 'Buena';
    }
  };

  const handleFormSubmit = (formValues) => {
    const calculatedSavings = calculateSavings(formValues);
    setSavingsPlan(calculatedSavings);
    setHistory([...history, formValues]);
  };

  const handleHistoryClick = (formValues) => {
    setSavingsPlan(calculateSavings(formValues));
  };

  return (
    <Container className="container">
      <CssBaseline />
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SavingsForm onSubmit={handleFormSubmit} />
        </Grid>
        <Grid item xs={12} md={6}>
          <EconomicSituationInfo />
        </Grid>
        {savingsPlan && (
          <Grid item xs={12}>
            <Results savings={savingsPlan} time={savingsPlan.time} />
          </Grid>
        )}
        <Grid item xs={12}>
          <HistoryList history={history} onHistoryClick={handleHistoryClick} />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default App;
