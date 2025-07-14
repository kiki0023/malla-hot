const cursos = [
  {
    "nombre": "ENGLISH I",
    "ciclo": 1,
    "prerequisito": null
  },
  {
    "nombre": "FUNDAMENTOS DE LA INDUSTRIA DE LA HOSPITALIDAD",
    "ciclo": 1,
    "prerequisito": null
  },
  {
    "nombre": "FUNDAMENTOS EN COMPETENCIAS DIGITALES",
    "ciclo": 1,
    "prerequisito": null
  },
  {
    "nombre": "LENGUAJE Y COMUNICACI\u00d3N I",
    "ciclo": 1,
    "prerequisito": null
  },
  {
    "nombre": "MATEM\u00c1TICA",
    "ciclo": 1,
    "prerequisito": null
  },
  {
    "nombre": "TEOR\u00cdA DEL TURISMO Y SOSTENIBILIDAD",
    "ciclo": 1,
    "prerequisito": null
  },
  {
    "nombre": "ADMINISTRACI\u00d3N PARA LOS NEGOCIOS",
    "ciclo": 2,
    "prerequisito": null
  },
  {
    "nombre": "ENGLISH II",
    "ciclo": 2,
    "prerequisito": "ENGLISH I"
  },
  {
    "nombre": "GESTI\u00d3N DE OPERACIONES DE ALOJAMIENTO I",
    "ciclo": 2,
    "prerequisito": "FUNDAMENTOS DE LA INDUSTRIA DE LA HOSPITALIDAD"
  },
  {
    "nombre": "LENGUAJE Y COMUNICACI\u00d3N II",
    "ciclo": 2,
    "prerequisito": "LENGUAJE Y COMUNICACI\u00d3N I"
  },
  {
    "nombre": "OPERACIONES Y SERVICIO DE ALIMENTOS Y BEBIDAS",
    "ciclo": 2,
    "prerequisito": "FUNDAMENTOS DE LA INDUSTRIA DE LA HOSPITALIDAD"
  },
  {
    "nombre": "REALIDAD NACIONAL Y GLOBALIZACI\u00d3N",
    "ciclo": 2,
    "prerequisito": null
  },
  {
    "nombre": "COSTOS DE ALIMENTOS Y BEBIDAS",
    "ciclo": 3,
    "prerequisito": "OPERACIONES Y SERVICIO DE ALIMENTOS Y BEBIDAS"
  },
  {
    "nombre": "ENGLISH III",
    "ciclo": 3,
    "prerequisito": "ENGLISH II"
  },
  {
    "nombre": "ESTAD\u00cdSTICA DESCRIPTIVA E INFERENCIA ESTAD\u00cdSTICA",
    "ciclo": 3,
    "prerequisito": "MATEM\u00c1TICA"
  },
  {
    "nombre": "GESTI\u00d3N DE OPERACIONES DE ALOJAMIENTO II",
    "ciclo": 3,
    "prerequisito": "GESTI\u00d3N DE OPERACIONES DE ALOJAMIENTO I"
  },
  {
    "nombre": "PRINCIPIOS DE ECONOM\u00cdA",
    "ciclo": 3,
    "prerequisito": null
  },
  {
    "nombre": "\u00c9TICA Y CIUDADAN\u00cdA",
    "ciclo": 3,
    "prerequisito": "REALIDAD NACIONAL Y GLOBALIZACI\u00d3N"
  },
  {
    "nombre": "ADMINISTRACI\u00d3N DE SERVICIOS Y DE LA CALIDAD",
    "ciclo": 4,
    "prerequisito": "GESTI\u00d3N DE OPERACIONES DE ALOJAMIENTO II"
  },
  {
    "nombre": "ENGLISH IV",
    "ciclo": 4,
    "prerequisito": "ENGLISH III"
  },
  {
    "nombre": "FUNDAMENTOS DEL LIDERAZGO SOSTENIBLE",
    "ciclo": 4,
    "prerequisito": "\u00c9TICA Y CIUDADAN\u00cdA"
  },
  {
    "nombre": "MARKETING",
    "ciclo": 4,
    "prerequisito": "ADMINISTRACI\u00d3N PARA LOS NEGOCIOS"
  },
  {
    "nombre": "METODOLOG\u00cdA DE LA INVESTIGACI\u00d3N CIENT\u00cdFICA",
    "ciclo": 4,
    "prerequisito": "ESTAD\u00cdSTICA DESCRIPTIVA E INFERENCIA ESTAD\u00cdSTICA"
  },
  {
    "nombre": "SANIDAD E HIGIENE DE LOS ALIMENTOS Y BEBIDAS",
    "ciclo": 4,
    "prerequisito": "COSTOS DE ALIMENTOS Y BEBIDAS"
  },
  {
    "nombre": "CREATIVIDAD E INNOVACI\u00d3N: DESIGN THINKING",
    "ciclo": 5,
    "prerequisito": null
  },
  {
    "nombre": "FUNDAMENTOS CONTABLES Y FINANCIEROS",
    "ciclo": 5,
    "prerequisito": null
  },
  {
    "nombre": "LEGISLACI\u00d3N APLICADA AL SECTOR",
    "ciclo": 5,
    "prerequisito": null
  },
  {
    "nombre": "PLANIFICACI\u00d3N Y DISE\u00d1O DE HOTELES Y RESTAURANTES",
    "ciclo": 5,
    "prerequisito": null
  },
  {
    "nombre": "PRINCIPIOS Y T\u00c9CNICAS CULINARIAS",
    "ciclo": 5,
    "prerequisito": "SANIDAD E HIGIENE DE LOS ALIMENTOS Y BEBIDAS"
  },
  {
    "nombre": "RELACIONES P\u00daBLICAS Y HABILIDADES SOCIALES EN LOS NEG.",
    "ciclo": 5,
    "prerequisito": null
  },
  {
    "nombre": "AN\u00c1LISIS GERENCIAL DE LA INFORMACI\u00d3N FINANCIERA",
    "ciclo": 6,
    "prerequisito": "FUNDAMENTOS CONTABLES Y FINANCIEROS"
  },
  {
    "nombre": "DIRECCI\u00d3N DE EVENTOS",
    "ciclo": 6,
    "prerequisito": "FUNDAMENTOS DEL LIDERAZGO SOSTENIBLE"
  },
  {
    "nombre": "GESTI\u00d3N SOSTENIBLE DE INSTALACIONES HOTELERAS",
    "ciclo": 6,
    "prerequisito": "ADMINISTRACI\u00d3N DE SERVICIOS Y DE LA CALIDAD"
  },
  {
    "nombre": "INVESTIGACI\u00d3N Y AN\u00c1LISIS DE MERCADO",
    "ciclo": 6,
    "prerequisito": "ESTAD\u00cdSTICA DESCRIPTIVA E INFERENCIA ESTAD\u00cdSTICA"
  },
  {
    "nombre": "MANAGING HOSPITALITY HUMAN RESOURCES",
    "ciclo": 6,
    "prerequisito": "PRINCIPIOS Y T\u00c9CNICAS CULINARIAS"
  },
  {
    "nombre": "STRATEGIC HOSPITALITY MARKETING",
    "ciclo": 6,
    "prerequisito": "MARKETING"
  },
  {
    "nombre": "OPORTUNIDADES DE NEGOCIOS",
    "ciclo": 7,
    "prerequisito": "MARKETING"
  },
  {
    "nombre": "PASTELERIA Y PANADERIA",
    "ciclo": 7,
    "prerequisito": "PRINCIPIOS Y T\u00c9CNICAS CULINARIAS"
  },
  {
    "nombre": "GESTI\u00d3N DE NEGOCIOS GASTRON\u00d3MICOS",
    "ciclo": 7,
    "prerequisito": "RELACIONES P\u00daBLICAS Y HABILIDADES SOCIALES EN LOS NEG."
  },
  {
    "nombre": "GESTI\u00d3N CONTABLE HOTELERA",
    "ciclo": 7,
    "prerequisito": "FUNDAMENTOS CONTABLES Y FINANCIEROS"
  },
  {
    "nombre": "GERENCIA COMERCIAL HOTELERA",
    "ciclo": 7,
    "prerequisito": "STRATEGIC HOSPITALITY MARKETING"
  },
  {
    "nombre": "ELECTIVO I",
    "ciclo": 7,
    "prerequisito": null
  },
  {
    "nombre": "EVALUACI\u00d3N DE PROYECTOS",
    "ciclo": 8,
    "prerequisito": "AN\u00c1LISIS GERENCIAL DE LA INFORMACI\u00d3N FINANCIERA"
  },
  {
    "nombre": "ADMINISTRACI\u00d3N DE OPERACIONES Y SERVICIOS",
    "ciclo": 8,
    "prerequisito": null
  },
  {
    "nombre": "DIRECCI\u00d3N DE EMPRESAS DE HOSPITALIDAD",
    "ciclo": 8,
    "prerequisito": "MANAGING HOSPITALITY HUMAN RESOURCES"
  },
  {
    "nombre": "GESTI\u00d3N DE INGRESOS",
    "ciclo": 8,
    "prerequisito": "STRATEGIC HOSPITALITY MARKETING"
  },
  {
    "nombre": "ELECTIVO II",
    "ciclo": 8,
    "prerequisito": null
  },
  {
    "nombre": "COMPLIANCE CORPORATIVO",
    "ciclo": 9,
    "prerequisito": null
  },
  {
    "nombre": "PLANEAMIENTO Y GESTI\u00d3N ESTRAT\u00c9GICA EN HOTELER\u00cdA",
    "ciclo": 9,
    "prerequisito": "ADMINISTRACI\u00d3N DE OPERACIONES Y SERVICIOS"
  },
  {
    "nombre": "PROYECTO DE TESIS I",
    "ciclo": 9,
    "prerequisito": "METODOLOG\u00cdA DE LA INVESTIGACI\u00d3N CIENT\u00cdFICA"
  },
  {
    "nombre": "PROYECTO INTEGRADOR",
    "ciclo": 9,
    "prerequisito": "EVALUACI\u00d3N DE PROYECTOS"
  },
  {
    "nombre": "ELECTIVO III",
    "ciclo": 9,
    "prerequisito": null
  },
  {
    "nombre": "LIDERAZGO Y COACHING PARA LOS NEGOCIOS",
    "ciclo": 10,
    "prerequisito": "MANAGING HOSPITALITY HUMAN RESOURCES"
  },
  {
    "nombre": "PROYECTO DE TESIS II",
    "ciclo": 10,
    "prerequisito": "PROYECTO DE TESIS I"
  },
  {
    "nombre": "ELECTIVO IV",
    "ciclo": 10,
    "prerequisito": null
  },
  {
    "nombre": "ELECTIVO V",
    "ciclo": 10,
    "prerequisito": null
  },
  {
    "nombre": "ELECTIVO VI",
    "ciclo": 10,
    "prerequisito": null
  }
];
let estadoCursos = {}, customNames = {}, audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq) {
  let osc = audioCtx.createOscillator();
  osc.frequency.value = freq;
  osc.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.1);
}

function renderMalla() {
  const container = document.querySelector('.malla');
  container.innerHTML = '';
  const total = cursos.length;
  const done = Object.keys(estadoCursos).length;
  document.querySelector('.progress').style.height = (done / total * 100) + '%';

  const ciclos = [...new Set(cursos.map(c => c.ciclo))].sort((a,b) => a-b);
  ciclos.forEach(ciclo => {
    let section = document.createElement('div');
    section.className = 'ciclo-section';
    let title = document.createElement('h2');
    title.textContent = 'Ciclo ' + ciclo;
    section.appendChild(title);
    cursos.filter(c => c.ciclo === ciclo).forEach(curso => {
      const div = document.createElement('div');
      div.className = 'curso';
      const name = customNames[curso.nombre] || curso.nombre;
      div.innerText = name;
      div.dataset.nombre = curso.nombre;
      div.dataset.prereq = curso.prerequisito || 'Sin prerrequisito';
      if (!curso.prerequisito || estadoCursos[curso.prerequisito]) div.classList.add('activo');
      if (estadoCursos[curso.nombre]) div.classList.add('completado');
      div.addEventListener('click', () => {
        if (!div.classList.contains('activo')) return;
        const isDone = estadoCursos[curso.nombre];
        if (curso.nombre.startsWith('ELECTIVO')) {
          if (!isDone) {
            const text = prompt('¿Qué curso elegiste para ' + curso.nombre + '?', customNames[curso.nombre] || '');
            if (text) customNames[curso.nombre] = text;
          } else delete customNames[curso.nombre];
        }
        if (isDone) { delete estadoCursos[curso.nombre]; playTone(440); }
        else { estadoCursos[curso.nombre] = true; playTone(880); }
        renderMalla();
      });
      section.appendChild(div);
    });
    container.appendChild(section);
  });
}

renderMalla();