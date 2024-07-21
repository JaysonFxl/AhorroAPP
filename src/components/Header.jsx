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
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {t('Savings Planner - Chile')}
        </Typography>
        <img src="chile.png" alt="Chile Flag" style={{ width: '50px', height: '50px'}} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
