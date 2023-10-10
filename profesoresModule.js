// profesoresModule.js

// Define la información de los profesores
const profesores = {};

// Función para que los profesores configuren las alertas
export function configurarAlertas(profesorNombre, alertas) {
  if (!profesores[profesorNombre]) {
    // Si el profesor no existe en la lista, créalo
    profesores[profesorNombre] = {
      alertas: [],
    };
  }

  // Asigna las alertas al profesor
  profesores[profesorNombre].alertas = alertas;

  // Muestra un mensaje en la consola
  console.log(`Alertas configuradas para el profesor: ${profesorNombre}`);
  console.log(`Nuevas alertas: ${alertas.join(', ')}`);
}
