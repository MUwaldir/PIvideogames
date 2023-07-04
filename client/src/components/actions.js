

export const validarNombre = (nombre) => {
    // Validar que el nombre no contenga símbolos o caracteres especiales
    const regex = /^[a-zA-Z0-9\s]+$/;
    return regex.test(nombre);
  };

 
 