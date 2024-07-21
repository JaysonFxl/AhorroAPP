import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <SavingsIcon style={{ marginRight: '10px' }} />
        <Typography variant="h6">
          {t('Planificador de Ahorro - Chile')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
