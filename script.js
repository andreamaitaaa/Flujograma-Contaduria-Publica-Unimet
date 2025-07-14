const materias = [
  { nombre: "Contabilidad 1", requisitos: [], abre: ["Contabilidad 2", "Fundamentos de Auditoría"] }
];

function render() {
  const div = document.createElement("div");
  div.className = "asignatura";
  div.innerHTML = `<h3>Contabilidad 1</h3><small>Sin requisitos</small>`;

  div.addEventListener("click", () => {
    div.classList.toggle("aprobada");
  });

  document.getElementById("trim1").appendChild(div);
}

render();
