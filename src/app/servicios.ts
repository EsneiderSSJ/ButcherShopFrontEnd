export const GLOBAL = {
    contextPath: (window.location.port != '' ? window.location.origin.replace(window.location.port, '8080') : window.location.origin + ':8080') + '/',
  
  };

  export const Constantes = {
  services: {
      customer: "http://localhost:8080/v1/customers"  
  }  
}