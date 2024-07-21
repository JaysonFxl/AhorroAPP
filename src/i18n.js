import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "Monthly Savings": "Ahorro Mensual",
      "Enter your monthly savings": "Ingrese su Ahorro Mensual",
      "Calculate": "Calcular",
      "Predicted Savings in a year": "Ahorro Predicho en un año",
      "Results": "Resultados",
      "Savings Planner - Chile": "Planificador de Ahorro Mensual - Chile",
      "More information about savings": "Más información sobre ahorro",
      "Please enter a valid amount": "Por favor, ingrese un valor válido.",
      "Optimal Savings Percentage": "Porcentaje Óptimo de Ahorro",
      "Economic Situation": "Situación Económica",
      "Critical Point": "Punto Crítico",
      "Horizontal Asymptote": "Asíntota Horizontal"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
