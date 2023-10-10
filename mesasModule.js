// mesasModule.js

// Importa el EventBus
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
    
    // Muestra el mensaje "mesa creada" en la consola
    console.log('Mesa creada');
  }

  // Disparar una alerta cuando se crea o edita una mesa
  eventBus.emit('mesaCreadaEditada', mesa);
}
