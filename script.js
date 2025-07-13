const cursos = [
  { nombre: "Comunicación", ciclo: 1 },
  { nombre: "Matemática I", ciclo: 1 },
  { nombre: "Historia", ciclo: 1 },
  { nombre: "Contabilidad", ciclo: 2 },
  { nombre: "Estadística", ciclo: 2 },
  { nombre: "Marketing", ciclo: 3 },
];

const contenedor = document.querySelector(".malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "curso";
  div.innerText = `${curso.nombre}\n(Ciclo ${curso.ciclo})`;

  div.addEventListener("click", () => {
    alert(`Curso: ${curso.nombre}\nCiclo: ${curso.ciclo}`);
  });

  contenedor.appendChild(div);
});
