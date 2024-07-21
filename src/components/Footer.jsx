import React from 'react';
import { Typography, Container, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../index.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container style={{ marginTop: '20px', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} {t('Savings Planner - Chile')}. Todos los derechos reservados.
      </Typography>
      <Link href="https://www.gob.cl/noticias/educacion-financiera-consejos-ahorro-dinero-cuidar-ingresos/" target="_blank" rel="noopener" color="inherit">
        {t('Mas Informacion sobre Educacion Financiera en Chile')}
      </Link>
    </Container>
  );
};

export default Footer;
