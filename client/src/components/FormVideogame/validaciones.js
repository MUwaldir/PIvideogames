export const validateForm = (formData) => {
    const errors = {};
  
    // Validación del campo 'nombre'
    if (!formData.nombre) {
      errors.nombre = 'El nombre es requerido';
    }
  
    // Validación del campo 'imagen'
    if (!formData.imagen) {
      errors.imagen = 'La imagen es requerida';
    }
  
    // Validación del campo 'descripcion'
    if (!formData.descripcion) {
      errors.descripcion = 'La descripción es requerida';
    }
  
    // Validación del campo 'plataformas'
    if (!formData.plataformas) {
      errors.plataformas = 'Las plataformas son requeridas';
    }
  
    // Validación del campo 'fechaLanzamiento'
    if (!formData.fecha_de_lanzamiento) {
      errors.fechaLanzamiento = 'La fecha de lanzamiento es requerida';
    }
  
    // Validación del campo 'rating'
    if (!formData.rating) {
      errors.rating = 'El rating es requerido';
    } else if (formData.rating < 0 || formData.rating > 10) {
      errors.rating = 'El rating debe estar entre 0 y 10';
    }
  
    // Validación del campo 'genre'
    if (!formData.genre || formData.genre.length === 0) {
      errors.genre = 'Debes seleccionar al menos un género';
    }
  
    return errors;
  };
  