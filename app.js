import { agregarEditarMesa, initMesasModule } from './mesasModule.js';
import {configurarAlertas} from './profesoresModule.js'

// Obtén la referencia a la tabla
const mesaTable = document.getElementById('mesaTable').getElementsByTagName('tbody')[0];

// Maneja el formulario para agregar o editar mesas
document.getElementById('mesaForm').addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener datos del formulario
  const mesaId = document.getElementById('mesaId').value;
  const profesor = document.getElementById('profesor').value;
  const alumnos = document.getElementById('alumnos').value.split(',');

  // Agregar una fila a la tabla con los datos de la mesa
  const newRow = mesaTable.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.innerHTML = mesaId; // ID de la mesa
  cell2.innerHTML = profesor; // Nombre del profesor
  cell3.innerHTML = alumnos.join(', '); // Lista de alumnos
  cell4.innerHTML = ''; // Columna vacía para la preferencia de alertas

  // Llama a la función para agregar o editar la mesa
  agregarEditarMesa({
    id: mesaId,
    profesor: profesor,
    alumnos: alumnos
  });

  document.getElementById('alertasTitulo').textContent = `Configurar Alertas de ${profesor}`;

  // Limpia el formulario
  document.getElementById('mesaId').value = '';
  document.getElementById('profesor').value = '';
  document.getElementById('alumnos').value = '';
});


initMesasModule();


// Maneja el formulario para configurar alertas
document.getElementById('alertasForm').addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener datos del formulario de alertas
  const preferenciaAlertas = document.getElementById('preferenciaAlertas').value;

  // Agregar la preferencia de alertas a la tabla
  const rowCount = mesaTable.rows.length;
  for (let i = 0; i < rowCount; i++) {
    const cell4 = mesaTable.rows[i].cells[3];
    cell4.innerHTML = preferenciaAlertas;
  }

  // Llama a la función para configurar las alertas
  configurarAlertas(profesor,preferenciaAlertas);
});