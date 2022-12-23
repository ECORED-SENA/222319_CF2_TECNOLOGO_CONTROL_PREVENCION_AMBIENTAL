export default {
  global: {
    componenteFormativo:
      'Identificar los Componentes Ambientales y Valorar los Impactos y Riesgos Ambientales según Metodologías Establecidas',
    descripcionCurso:
      'En este componente formativo se identificarán todos los términos, técnicas y métodos necesarios para el desarrollo del primer resultado de aprendizaje, su fin es preparar al aprendiz para el diagnóstico ambiental en una organización, realizando identificación del contexto de la organización, componentes ambientales, diversas metodologías de evaluación de impacto y riesgos ambientales para priorizar impactos significativos y proponer planes de manejo ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Presentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Introducción Evaluación de Impacto ambiental',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Bases conceptuales para la Evaluación y Valoración de los aspectos, impactos y riesgos ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'La valoración ambiental',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos de valor',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Criterios para la valoración ambiental',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'La capacidad de acogida o sensibilidad ambiental',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Características de los impactos',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Gestión del riesgo',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Metodologías de valoración de impactos ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Valoración de los impactos ambientales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Metodologías',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Metodología para la identificación y valoración de riesgos ambientales GTC 104 de 2009',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Medidas de manejo ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Plan de Manejo Ambiental',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Esquema conceptual de la formulación del PMA',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Tipos de medida según los objetivos que se persiguen',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Ejemplo de medidas de manejo ambiental',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Procedimiento para la selección de las medidas de manejo',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia:
        'Noticias Caracol (agosto 2018). Ituango vive la peor crisis tras emergencia del proyecto hidroeléctrico.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=buPSHHPnPzk&feature=youtu.be',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'elemento de las actividades, productos o servicios de una organización que interactúa o puede interactuar con el medio ambiente. (NTC ISO 14001:2015)',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'etapas consecutivas e interrelacionadas de un sistema de producto (o servicio) , desde la adquisición de materia prima o su generación a partir de recursos naturales hasta la disposición final. (NTC ISO 14001:2015)',
    },
    {
      termino: 'Evaluación de Impacto Ambiental',
      significado:
        'se entiende por Evaluación de Impacto Ambiental, el conjunto de estudios y sistemas técnicos que permiten estimar los efectos que la ejecución de un determinado proyecto, obra o actividad, causa sobre el medio ambiente, el cual tiene la identificación de los aspectos e impactos ambientales por medio de metodologías cuantitativas y/o cualitativas como puede ser el desarrollo de matrices de impacto ambiental.  (Vicente Conesa -Guia Metodologica para la Evaluaciòn del Impacto Ambiental ).',
    },
    {
      termino: 'Factores Ambientales',
      significado:
        'factores Ambientales o Parámetros ambientales, englobamos los diversos componentes del Medio Ambiente entre los cuales se desarrolla la vida en nuestro planeta. Son el soporte de toda actividad humana.  Son susceptibles de ser modificados por los humanos y estas modificaciones pueden ser grandes y ocasionar graves problemas, generalmente difíciles de valorar ya que suelen ser a medio o largo plazo, o bien problemas menores y entonces son fácilmente soportables.   Los factores ambientales considerados son: • El hombre, la flora y la fauna.  • El suelo, el agua, el aire, el clima y el paisaje. Las interacciones entre los anteriores.  • Los bienes materiales y el patrimonio cultural. (Vicente Conesa -Guia Metodologica para la Evaluaciòn del Impacto Ambiental',
    },
    {
      termino: 'Línea Base Ambiental',
      significado:
        'es la descripción de la situación actual, en la fecha del estudio, sin influencia de nuevas intervenciones antrópicas. En otras palabras es la fotografía de la situación ambiental imperante, considerando todas las variables ambientales, en el momento que se ejecuta el estudio. Se consideran todos los elementos que intervienen en una evaluación de impacto ambiental y una situación crítica, reseñando actividad humana actual, estado y situación de la biomasa vegetal y animal, clima, suelos, etc. (Wikipedia)',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cambio en el medio ambiente, ya sea adverso o beneficioso como resultado total o parcial de los aspectos ambientales de una organización. (NTC ISO 14001:2015)',
    },
    {
      termino: 'Medio ambiente',
      significado:
        'entorno en el cual una organización opera, incluidos el aire, el agua, el suelo, los recursos naturales, la flora, la fauna, los seres humanos y sus interrelaciones. (NTC ISO 14001:2015)',
    },
    {
      termino: 'Proceso',
      significado:
        'conjunto de actividades interrelacionadas o que interactúan, que transforman las entradas en salidas (NTC ISO 14001:2015)',
    },
    {
      termino: 'Plan de manejo ambiental',
      significado:
        'es el conjunto detallado de medidas y actividades que, producto de una evaluación ambiental, están orientadas a prevenir, mitigar, corregir o compensar los impactos y efectos ambientales debidamente identificados, que se causen por el desarrollo de un proyecto, obra o actividad. Incluye los planes de seguimiento, monitoreo, contingencia, y abandono según la naturaleza del proyecto, obra o actividad. (Decreto 2820/2010 art. 1)',
    },
    {
      termino: 'Prevención de la contaminación',
      significado:
        'Utilizaciòn de procesos, prácticas, técnicas, materiales, productos, servicios o energía para evitar, reducir o controlar (en forma separada o en combinación) la generación, emisión o descarga de cualquier tipo de contaminante o residuo, con el fin de reducir impactos ambientales adversos. (NTC ISO 14001:2015)',
    },
  ],
  referencias: [
    {
      referencia:
        'Arboleda, J. A. (2008). Manual de evaluación de impacto ambiental de proyectos, obra o actividades. Medellin, Colombia. https://doi.org/10.1017/CBO9781107415324.004',
    },
    {
      referencia:
        'ANLA Autoridad Nacional de licencias Ambientales. (2018) Guía para la definición, identificación y delimitación del área de influencia.',
    },
    {
      referencia:
        'Alcaldia de Medellín (2014) Guía de Manejo Socioambiental para la Construcción de Obras de Infraestructura Pública de Medellín.',
    },
    {
      referencia:
        'Conesa V. (1993) La Evaluación del Impacto Ambiental. Mundi Prensa. Segunda edición, Madrid, España.',
    },
    {
      referencia:
        'Españo, I. l. (2016) Evaluación de Impacto Ambiental. Dextra Editorial S.L.; Edición: 1',
    },
    {
      referencia:
        'Garmendia Salvador, A (2005) Evaluación de Impacto Ambiental. Pearson.',
    },
    {
      referencia:
        'ICONTEC (2015).  Norma NTC-ISO 14001 Sistema de gestión ambiental. ',
    },
    {
      referencia:
        'ICONTEC (2010). Noma NTC-ISO 14050 Instituto Colombiano de Normas Técnicas. Gestión ambiental, vocabulario.',
    },
    {
      referencia:
        'ICONTEC (2000). Nomra NTC-ISO 14031 Instituto Colombiano de Normas Técnicas. Gestión Ambiental, Evaluación del Desempeño Ambiental, Directrices.',
    },
    {
      referencia:
        'ICONTEC (2009) GTC 104 Gestión del Riesgo Ambiental, Principios y Procesos. ICONTEC (2007). ISO 14040 Gestión Ambiental, Análisis de Ciclo de vida. Principios y marco de referencia. ',
    },
    {
      referencia:
        'Martinez Orozco, J. (2020) Casos prácticos en Evaluación de Impacto Ambiental. Dextra Editorial.',
    },
    {
      referencia:
        'Ministerio de Medio Ambiente. (2002) Manual de Evaluaciòn de Estudios Ambientales. ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Triana Guarnizo',
        cargo: 'Instructor',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Juan Carlos Cárdenas Sánchez',
        cargo: 'Instructor',
        centro: 'Centro de Gestión Indutrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
