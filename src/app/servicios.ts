export const GLOBAL = {
    contextPath: (window.location.port != '' ? window.location.origin.replace(window.location.port, '8080') : window.location.origin + ':8080') + '/',
  
  };

  export const Constantes = {
  services: {
      cliente: GLOBAL.contextPath + '/v1/costumers/',
  }  
}