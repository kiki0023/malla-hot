const cursos = [
  {
    "nombre": "ENGLISH I",
    "ciclo": 1,
    "prerequisito": null
  },
  {
    "nombre": "ENGLISH II",
    "ciclo": 2,
    "prerequisito": "ENGLISH I"
  },
  {
    "nombre": "MATEM\u00c1TICA",
    "ciclo": 1,
    "prerequisito": null
  },
  {
    "nombre": "ESTAD\u00cdSTICA DESCRIPTIVA E INFERENCIA ESTAD\u00cdSTICA",
    "ciclo": 3,
    "prerequisito": "MATEM\u00c1TICA"
  },
  {
    "nombre": "COSTOS DE ALIMENTOS Y BEBIDAS",
    "ciclo": 3,
    "prerequisito": "OPERACIONES Y SERVICIO DE ALIMENTOS Y BEBIDAS"
  },
  {
    "nombre": "OPERACIONES Y SERVICIO DE ALIMENTOS Y BEBIDAS",
    "ciclo": 2,
    "prerequisito": "FUNDAMENTOS DE LA INDUSTRIA DE LA HOSPITALIDAD"
  }
];

const estadoCursos = {};

function renderMalla() {
    const container = document.querySelector(".malla");
    container.innerHTML = "";

    cursos.forEach(curso => {
        const div = document.createElement("div");
        div.className = "curso";
        div.innerText = `${curso.nombre}\n(Ciclo ${curso.ciclo})`;
        div.dataset.nombre = curso.nombre;
        div.dataset.prereq = curso.prerequisito || "Sin prerrequisito";

        const prereq = curso.prerequisito;
        if (!prereq || estadoCursos[prereq]) {
            div.classList.add("activo");
            div.style.cursor = "pointer";
        }

        if (estadoCursos[curso.nombre]) {
            div.classList.add("completado");
        }

        div.addEventListener("click", () => {
            if (div.classList.contains("activo")) {
                estadoCursos[curso.nombre] = true;
                renderMalla();
            }
        });

        container.appendChild(div);
    });
}

renderMalla();
