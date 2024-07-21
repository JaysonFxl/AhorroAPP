// Ajuste logístico
export const logisticFunction = (t, L, k, x0) => {
    return L / (1 + Math.exp(-k * (t - x0)));
  };
  
  // Derivada de la función logística
  export const logisticDerivative = (t, L, k, x0) => {
    const expTerm = Math.exp(-k * (t - x0));
    return (L * k * expTerm) / Math.pow(1 + expTerm, 2);
  };
  
  // Límite de la función logística cuando t tiende a infinito
  export const logisticLimit = (L) => {
    return L;
  };
  
  // Puntos críticos (máximos y mínimos) de la función logística
  export const criticalPoints = (L, k, x0) => {
    return x0; // El punto de inflexión
  };
  
  // Asíntota horizontal de la función logística
  export const horizontalAsymptote = (L) => {
    return L;
  };
  