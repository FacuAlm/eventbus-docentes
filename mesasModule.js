// mesasModule.js

import { eventBus } from './eventBus.js';

const mesas = []; // Almacena las mesas de exámenes

// Función para agregar o editar una mesa
export function agregarEditarMesa(mesa) {
  // Verificamos si la mesa ya existe por su ID
  const mesaExistente = mesas.find((m) => m.id === mesa.id);

  if (mesaExistente) {
    // Editar la mesa existente
    mesaExistente.profesor = mesa.profesor;
    mesaExistente.alumnos = mesa.alumnos;
  } else {
    // Agregar una nueva mesa
    mesas.push(mesa);
    console.log('Mesa creada');
  }

  // Disparar una alerta cuando se crea o edita una mesa
  eventBus.emit('mesaCreadaEditada', mesa);
}

// Inicializar el módulo
export function initMesasModule() {
  // Registrar un manejador para el evento 'mesaCreadaEditada'
  eventBus.on('mesaCreadaEditada', (mesa) => {
    console.log(`Mesa ${mesa.id} creada o editada.`);
    console.log(`Profesor: ${mesa.profesor}`);
    console.log(`Alumnos: ${mesa.alumnos}`);
  });

  // Otras funciones y lógica relacionada con la gestión de mesas
}