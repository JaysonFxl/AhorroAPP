export const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  
  export const parseNumber = (str) => {
    if (typeof str === 'string') {
      return parseFloat(str.replace(/\./g, ""));
    }
    return str;
  };
  