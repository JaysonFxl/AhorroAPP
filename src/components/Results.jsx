import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import SavingsChart from './SavingsChart';
import ResultsTable from './ResultsTable';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../utils/numberFormat';
import '../index.css';

const Results = ({ savings, time }) => {
  const { t } = useTranslation();

  return (
    <Paper elevation={3} className="paper">
      <Typography variant="h5" gutterBottom>
        {t('Results')}
      </Typography>
      {savings && (
        <>
          <Typography variant="h6">
            {t('Predicted Savings in a year')}: CLP {formatNumber(savings.totalSavings)}
          </Typography>
          <Typography variant="h6">
            {t('Optimal Savings Percentage')}: {savings.optimalPercentage}%
          </Typography>
          <Typography variant="h6">
            {t('Economic Situation')}: {savings.economicSituation}
          </Typography>
          <Typography variant="h6">
            {t('Critical Point')}: Mes {savings.criticalPoint}
          </Typography>
          <Typography variant="h6">
            {t('Horizontal Asymptote')}: CLP {formatNumber(savings.horizontalAsymptote)}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ResultsTable savingsData={savings.savingsData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <SavingsChart savingsData={savings.savingsData} time={time} />
            </Grid>
          </Grid>
        </>
      )}
    </Paper>
  );
};

export default Results;
