// script.js
const materias = [
  // Trimestre I
  { nombre: "Contabilidad 1", requisitos: [], abre: ["Contabilidad 2", "Fundamentos de Auditoría"] },
  { nombre: "Ingles IV", requisitos: [], abre: ["Ingles V"] },
  { nombre: "Principios de economía", requisitos: [], abre: [] },
  { nombre: "Matemática Básica", requisitos: [], abre: [] },
  { nombre: "Introduccón a las Ciencias Administrativas", requisitos: [], abre: [] },

  // Trimestre II
  { nombre: "Contabilidad 2", requisitos: ["Contabilidad 1"], abre: ["Contabilidad 3", "Analisis de EEFF"] },
  { nombre: "Ingles V", requisitos: ["Ingles IV"], abre: [] },
  { nombre: "Elaboración de reportes empresariales", requisitos: [], abre: [] },
  { nombre: "Calculo 1", requisitos: [], abre: ["Calculo 2", "Microeconomia 1"] },
  { nombre: "Competencias para emprender", requisitos: [], abre: [] },

  // Trimestre III
  { nombre: "Contabilidad 3", requisitos: ["Contabilidad 2"], abre: ["Costos 1"] },
  { nombre: "Investigacion y sustentabilidad", requisitos: [], abre: [] },
  { nombre: "Microeconomia 1", requisitos: ["Calculo 1"], abre: ["Macroeconomia 1", "Matematica Financiera"] },
  { nombre: "Calculo 2", requisitos: ["Calculo 1"], abre: ["Estadistica 1", "Investigacion de operaciones"] },
  { nombre: "Ideas emprendedoras", requisitos: [], abre: [] },

  // Trimestre IV
  { nombre: "Costos 1", requisitos: ["Contabilidad 3"], abre: ["Costos 2", "Presupuesto empresarial"] },
  { nombre: "Fundamentos de Auditoría", requisitos: ["Contabilidad 1"], abre: ["Auditoria externa"] },
  { nombre: "Macroeconomia 1", requisitos: ["Microeconomia 1"], abre: ["Economia gerencial"] },
  { nombre: "Estadistica 1", requisitos: ["Calculo 2"], abre: ["Estadistica 2", "Bootcamp de mineria de datos"] },
  { nombre: "Venezuela: Identidad y Contexto", requisitos: [], abre: [] },

  // Trimestre V
  { nombre: "Costos 2", requisitos: ["Costos 1"], abre: ["Costos 3"] },
  { nombre: "Auditoria externa", requisitos: ["Fundamentos de Auditoría"], abre: ["Auditoria Interna"] },
  { nombre: "Economia gerencial", requisitos: ["Macroeconomia 1"], abre: [] },
  { nombre: "Estadistica 2", requisitos: ["Estadistica 1"], abre: [] },
  { nombre: "Matematica Financiera", requisitos: ["Microeconomia 1"], abre: ["Finanzas 1"] },

  // Trimestre VI
  { nombre: "Costos 3", requisitos: ["Costos 2"], abre: ["Contabilidad superior"] },
  { nombre: "Auditoria Interna", requisitos: ["Auditoria externa"], abre: ["Auditoria Forense"] },
  { nombre: "Analisis de EEFF", requisitos: ["Contabilidad 2"], abre: [] },
  { nombre: "Finanzas 1", requisitos: ["Matematica Financiera"], abre: ["Finanzas 2"] },
  { nombre: "Investigacion de operaciones", requisitos: ["Calculo 2"], abre: [] },

  // Trimestre VII
  { nombre: "Contabilidad superior", requisitos: ["Costos 3"], abre: ["Contabilidad avanzada"] },
  { nombre: "Auditoria Forense", requisitos: ["Auditoria Interna"], abre: ["Tributos 1"] },
  { nombre: "Presupuesto empresarial", requisitos: ["Costos 1"], abre: [] },
  { nombre: "Finanzas 2", requisitos: ["Finanzas 1"], abre: ["Evaluacion de proyectos", "Mercado de valores"] },
  { nombre: "Mercadeo", requisitos: [], abre: ["Investigacion de Mercado"] },

  // Trimestre VIII
  { nombre: "Contabilidad avanzada", requisitos: ["Contabilidad superior"], abre: [] },
  { nombre: "Gobierno corporativo", requisitos: [], abre: [] },
  { nombre: "Investigacion de Mercado", requisitos: ["Mercadeo"], abre: [] },
  { nombre: "Evaluacion de proyectos", requisitos: ["Finanzas 2"], abre: [] },
  { nombre: "Mundo global: Tendencias y transformaciones", requisitos: [], abre: [] },

  // Trimestre IX
  { nombre: "Seminario profesional 1", requisitos: [], creditos: 105 },
  { nombre: "Seminario profesional 2", requisitos: [], creditos: 105 },
  { nombre: "Economia conductual", requisitos: [], creditos: 90 },
  { nombre: "Mercado de valores", requisitos: ["Finanzas 2"], abre: [] },
  { nombre: "Etica empresarial", requisitos: [], creditos: 90 },

  // Trimestre X
  { nombre: "Tributos 1", requisitos: ["Auditoria Forense"], abre: ["Tributos 2"] },
  { nombre: "Simulacion de negocios nacionales", requisitos: [], abre: [] },
  { nombre: "Bootcamp de mineria de datos", requisitos: ["Estadistica 1"], abre: ["Bootcamp de analitica de datos"] },
  { nombre: "Business Law", requisitos: [], abre: [] },
  { nombre: "Taller de trabajo de grado FACES", requisitos: [], creditos: 135, abre: ["Defensa de TG"] },

  // Trimestre XI
  { nombre: "Tributos 2", requisitos: ["Tributos 1"], abre: ["Tributos 3"] },
  { nombre: "Herramientas tecnologicas 1", requisitos: [], abre: [] },
  { nombre: "Bootcamp de analitica de datos", requisitos: ["Bootcamp de mineria de datos"], abre: [] },
  { nombre: "Electiva 1", requisitos: [], abre: [] },
  { nombre: "Electiva 2", requisitos: [], abre: [] },

  // Trimestre XII
  { nombre: "Tributos 3", requisitos: ["Tributos 2"], abre: [] },
  { nombre: "Herramientas Tecnologicas 2", requisitos: ["Herramientas tecnologicas 1"], abre: [] },
  { nombre: "Seminario profesional 3", requisitos: [], abre: [] },
  { nombre: "Electiva 3", requisitos: [], abre: [] },
  { nombre: "Electiva 4", requisitos: [], abre: [] },

  // Requisitos adicionales
  { nombre: "Taller de servicio comunitario", requisitos: [], abre: [] },
  { nombre: "Servicio comunitario", requisitos: [], abre: [] },
  { nombre: "Pasantias", requisitos: [], creditos: 120 },
  { nombre: "Defensa de TG", requisitos: ["Taller de trabajo de grado FACES"], abre: [] },
];

let creditos = 0;
let aprobadas = new Set();

function actualizarEstadisticas() {
  document.getElementById("creditos").innerText = creditos;
  document.getElementById("aprobadas").innerText = aprobadas.size;
  document.getElementById("pendientes").innerText = materias.length - aprobadas.size;
}

function puedeAprobar(materia) {
  if (aprobadas.has(materia.nombre)) return false;
  const requisitosCumplidos = materia.requisitos ? materia.requisitos.every(req => aprobadas.has(req)) : true;
  const creditosMinimos = materia.creditos ? creditos >= materia.creditos : true;
  return requisitosCumplidos && creditosMinimos;
}

function render() {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";

  materias.forEach(materia => {
    const div = document.createElement("div");
    div.className = "asignatura";
    div.innerHTML = `<h3>${materia.nombre}</h3><small>${materia.requisitos.length ? "Requiere: " + materia.requisitos.join(", ") : (materia.creditos ? "Requiere: " + materia.creditos + " créditos" : "Sin requisitos")}</small>`;

    if (aprobadas.has(materia.nombre)) {
      div.classList.add("aprobada");
    } else if (!puedeAprobar(materia)) {
      div.classList.add("bloqueada");
    }

    div.addEventListener("click", () => {
      if (aprobadas.has(materia.nombre)) return;
      if (puedeAprobar(materia)) {
        aprobadas.add(materia.nombre);
        creditos += 3;
        render();
        actualizarEstadisticas();
      }
    });

    container.appendChild(div);
  });

  actualizarEstadisticas();
}

render();
