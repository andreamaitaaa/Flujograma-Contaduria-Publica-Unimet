document.addEventListener("DOMContentLoaded", () => {
  const materias = document.querySelectorAll(".materia");

  function actualizarResumen() {
    const materiasTotales = materias.length;
    const aprobadas = document.querySelectorAll(".materia.aprobada").length;
    const creditosTotales = Array.from(materias)
      .map((m) => parseInt(m.dataset.creditos || "0"))
      .reduce((a, b) => a + b, 0);
    const creditosAprobados = Array.from(document.querySelectorAll(".materia.aprobada"))
      .map((m) => parseInt(m.dataset.creditos || "0"))
      .reduce((a, b) => a + b, 0);

    document.getElementById("aprobadas").textContent = aprobadas;
    document.getElementById("faltantes").textContent = materiasTotales - aprobadas;
    document.getElementById("creditos-totales").textContent = creditosTotales;
    document.getElementById("creditos-aprobados").textContent = creditosAprobados;
  }

  function puedeActivarse(materia) {
    const requisitos = materia.dataset.requisitos;
    const minCreditos = parseInt(materia.dataset.minCreditos || "0");

    let requisitosCumplidos = true;

    if (requisitos) {
      const codigos = requisitos.split(",");
      for (let codigo of codigos) {
        const req = document.querySelector(`.materia[data-codigo="${codigo.trim()}"]`);
        if (!req || !req.classList.contains("aprobada")) {
          requisitosCumplidos = false;
          break;
        }
      }
    }

    const creditosAprobados = Array.from(document.querySelectorAll(".materia.aprobada"))
      .map((m) => parseInt(m.dataset.creditos || "0"))
      .reduce((a, b) => a + b, 0);

    return requisitosCumplidos && creditosAprobados >= minCreditos;
  }

  function actualizarEstadoMaterias() {
    materias.forEach((materia) => {
      if (!materia.classList.contains("aprobada")) {
        if (puedeActivarse(materia)) {
          materia.classList.remove("bloqueada");
        } else {
          materia.classList.add("bloqueada");
        }
      }
    });
  }

  materias.forEach((materia) => {
    materia.addEventListener("click", () => {
