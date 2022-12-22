<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero
        span 4
      h1 Metodologías de valoración de impactos ambientales  
    img(data-aos="fade-down-right").mb-5(src="@/assets/curso/tema4/img1.jpg")
    Separador
    #t_4_1.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 4.1 Valoración de los impactos ambientales
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema4/img2.jpg")
      .col-lg-6.col-md-12.fondo-14.px-5.pt-5(data-aos="fade-down-left")
        p En respuesta a la forma como se ejecuta o realiza la acción que produce el impacto y de acuerdo con las condiciones del factor ambiental que está siendo afectado por dicha acción (línea base) 
        p Se generan características especiales en los impactos, que le establecen atributos particulares a cada uno de ellos. 
        p Identificar estas particularidades es la mayor dificultad en las evaluaciones y por eso la mayoría de los métodos de evaluación tratan de calificar algunos de estos atributos con el fin de determinar la significación o gravedad del impacto.   
    p.my-5(data-aos="fade-down-right") El procedimiento para la realización de esta actividad está compuesto por dos actividades secuenciales, a saber:
    .row.justify-content-center
      .col-lg-5.col-md-6.col-10.col-lg.mb-5.mb-lg-0(data-aos="fade-down-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/fig1.svg')
          .tarjeta.fondo-7.quitar-redondeado
            .p-4
              p #[b a) La identificación de los impactos:] Corresponde a la determinación de la existencia de un cambio en alguna de las condiciones ambientales por efecto de unas acciones de la organización o proyecto. Básicamente es el procedimiento de interrelacionar las ASPI y las FARI, para determinar donde se generan cambios en los factores ambientales. 

      .col-lg-5.col-md-6.col-10.col-lg.mb-5.mb-lg-0(data-aos="fade-down-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/fig2.svg')
          .tarjeta.fondo-7.quitar-redondeado
            .p-4
              p #[b b) La evaluación de los impactos ambientales:] Algunos autores la denominan también valoración y consiste en determinar la significancia de los cambios utilizando metodologías reconocidas.
    p.my-5(data-aos="fade-down-right") En la siguiente Imagen se muestra el esquema que se propone para adelantar esta etapa del diagnóstico, el cual comprende las actividades anteriormente descritas y se le adiciona una tercera que tiene que ver con el manejo de la información que se genera con este proceso.
    //-no mostrar menor a 768px
    .row.justify-content-center.no-mostrarmenor768(data-aos="fade-down-left")
      .col-lg-10.col-md-12.fondo-2.p-5
        h4.text-center.mb-5 Pasos de la evaluación ambiental, del manual de arboleda
        .row.align-items-center.justify-content-center
          .col-3
            p Acciones del proyecto susceptible de producir impacto
            p Factores ambientales susceptibles de recibir impacto
          .col-1
            img.mb-5.p-lg-2.p-0(src='@/assets/curso/tema4/iconoflecha.svg')
            img.mt-5.p-lg-2.p-0(src='@/assets/curso/tema4/iconoflecha.svg')
          .col-lg-4.col-5.fondo-1.redondear.px-2.py-5.p-md-4
            p 1. Identificación de impactos.
            p 2. Valoración de impactos
            p.mb-0 3. Análisis y síntesis de los impactos ambientales.
          .col-1.pb-sm-5.pb-0
            img.mb-5.p-lg-2.p-0(src='@/assets/curso/tema4/fig3flecha.svg')
          .col-2.pb-5 
            p.mb-5 Información para el PMA
    //-no mostrar mayor a 768px
    .row.justify-content-center.no-mostrarmayor768(data-aos="fade-down-left")
      .col-lg-10.col-md-12.fondo-2.p-5
        h4.text-center.mb-5 Pasos de la evaluación ambiental, del manual de arboleda
        .row.align-items-center.justify-content-center
          .col-6
            p Acciones del proyecto susceptible de producir impacto
          .col-6
            p Factores ambientales susceptibles de recibir impacto
        .row.justify-content-around.my-2
          .col-2
            img(src='@/assets/curso/tema4/flechaabajo.svg')
          .col-2
            img(src='@/assets/curso/tema4/flechaabajo.svg')
        .row.justify-content-center.mb-2
          .col-11.fondo-1.redondear.p-4
            p 1. Identificación de impactos.
            p 2. Valoración de impactos
            p.mb-0 3. Análisis y síntesis de los impactos ambientales.
        .row.justify-content-center
          .col-2.mb-2
            img(src='@/assets/curso/tema4/flechaabajo1.svg')
        .row.justify-content-center.mb-2
          .col-auto
            p.mb-5 Información para el PMA
    //- fuente 
    .row.mt-3.mb-4.justify-content-center.px-0(data-aos="fade-down-left")
      .col-lg-10.col-12.fondo-15.mx-0.py-3
        p.fuente-14px.mb-0 Jorge A, A (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades. Pág. 57 
    Separador
    #t_4_2.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 4.2 Metodologías

    .row.no-mostrarmenor1200(data-aos="fade-down-left")
      .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/fig3.svg")
      .col-lg-8.col-6
        .row 
          .col-lg-1.col-2.mb-4.mb-lg-0.me-0.pe-0.mt-2(data-aos="fade-down-right")
            img.me-0(src="@/assets/curso/tema3/flechazul.svg")
          .col-lg-9.col-10.fondo-4.p-md-4.p-3.ms-0(data-aos="fade-down-left")  
            p.mb-0 Existe un gran número de metodologías, las cuales cubren un alto espectro de posibilidades generales o específicas, cualitativas o cuantitativas, sencillas o complejas, con altos o pocos requerimientos de información, con sencillos o sofisticados elementos de cálculo y procesamiento de información, etc. 
          .col-1
          .col-lg-2.col-1 
          .col-lg-9.col-7.fondo-3.p-md-4.p-3.me-0.mt-2(data-aos="fade-down-left")  
            p.mb-0 Es el conjunto de elementos, características, procesos que dotan al medio ambiente de una serie de cualidades y méritos en los que se basa la necesidad de su conservación (Conesa, 1997).
          .col-lg-1.col-2.mb-4.mb-lg-0.ms-0.ps-0.mt-3(data-aos="fade-down-right")
            img.ms-0(src="@/assets/curso/tema3/flechaverde.svg")
      .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema4/chicoizq.svg")

    .row.no-mostrarmayor1201(data-aos="fade-down-left")
      .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/fig3.svg")
      .col-lg-10.col-9
        .row 
          .col-lg-1.col-2.mb-4.mb-lg-0.me-0.pe-0.mt-2(data-aos="fade-down-right")
            img.me-0.p-0.py-sm-3.p-md-0(src="@/assets/curso/tema3/flechazul.svg")
          .col-lg-11.col-10.fondo-4.p-md-4.p-3.ms-0(data-aos="fade-down-left")  
            p.mb-0 Existe un gran número de metodologías, las cuales cubren un alto espectro de posibilidades generales o específicas, cualitativas o cuantitativas, sencillas o complejas, con altos o pocos requerimientos de información, con sencillos o sofisticados elementos de cálculo y procesamiento de información, etc. 
      .row.my-3
        .col-lg-9.col-7.fondo-3.p-md-4.p-3.me-0.mt-2(data-aos="fade-down-left")  
          p.mb-0 Es el conjunto de elementos, características, procesos que dotan al medio ambiente de una serie de cualidades y méritos en los que se basa la necesidad de su conservación (Conesa, 1997).
        .col-lg-1.col-2.mb-4.mb-lg-0.ms-0.ps-0.mt-3(data-aos="fade-down-right")
          img.ms-0.p-0.py-sm-4.pe-sm-3(src="@/assets/curso/tema3/flechaverde.svg")
        .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
          img(src="@/assets/curso/tema4/chicoizq.svg")
    p.my-4(data-aos="fade-down-left") Es por eso que la selección del método que se debe utilizar para una organización o proyecto debe ser el resultado de un análisis que considere los siguientes aspectos:
    .row.justify-content-center(data-aos="fade-down-left")
      .col-lg-10.col-md-12.fondo-7.p-5.mb-5
        .row.justify-content-center
          .col-md-2.col-4.mb-4.mb-md-0
            img(src="@/assets/curso/tema3/chico.svg")
          .col-md-10.col-12
            p #[b a.] El tipo o naturaleza de la organización o proyecto que se esté evaluando.
            p #[b b.] La fase en que se encuentra.
            p #[b c.] Los requerimientos y disponibilidad de información.
            p #[b d.] La naturaleza de los impactos.
            p #[b e.] Los requisitos legales (específicamente los términos de referencia o las guías ambientales sectoriales).
            p #[b f.] Los recursos técnicos, financieros y de tiempo disponibles.
    p(data-aos="fade-down") De acuerdo con lo anterior y acorde con la metodología asignada por el instructor para realizar la valoración de los impactos de la organización o proyecto se sugiere tener en cuenta la siguiente metodología.  
    p(data-aos="fade-down-left") Aunque se aclara que es solo una sugerencia ya que el abanico de metodologías es tan amplio que pueden elegir la más pertinente dependiendo del proyecto.
    p(data-aos="fade-down-left") Imagen con la descripción de algunas de las metodologías más usadas en Colombia en los últimos años:
    .row.justify-content-center.my-5
      .col-lg-10.col-md-12.fondo-16.p-3.p-md-5.mb-5
        h4.text-center.mb-4 Método EPM o método Arboleda
        .row.justify-content-center
          .col-lg-10.col-md-12
            img(src="@/assets/curso/tema4/fig3.svg")
    //-fuente pie de grafica
    .row.mt-3.mb-4.justify-content-center.px-0(data-aos="fade-down-left")
      .col-lg-10.col-12.fondo-13.mx-0.py-3
        p.fuente-14px.mb-0 Manual de Evaluación de Impacto Ambiental de Proyectos, Obras o Actividades. Capítulo 4. 
    p(data-aos="fade-down-right") Fue desarrollado por la Unidad Planeación Recursos Naturales de las Empresas Públicas de Medellín en el año 1986, con el propósito de evaluar proyectos de aprovechamiento hidráulico de la empresa, pero posteriormente se utilizó para evaluar todo tipo de proyectos de EPM y ha sido utilizado por otros evaluadores para muchos tipos de proyectos con resultados favorables. 
    p(data-aos="fade-down-left") Este método ha sido aprobado por las autoridades ambientales colombianas y por entidades internacionales como el Banco Mundial y el BID. 
    .row.justify-content-center.my-5
      .col-lg-10.col-md-12.fondo-12.p-3.p-md-5.mb-5(data-aos="fade-down-left")
        .row
          .col-lg-1.col-2
            img(src="@/assets/curso/tema4/fig4.svg")
          .col-10
            h5 ¡Estimado Aprendiz! 
            p Para profundizar en el tema lo invitamos a consultar en MATERIAL DE APOYO
            .tarjeta.color-primario.p-3.mb-2
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Instructivo para la valoración de impactos EPM arboleda
                .col-sm-auto
                  a.boton.fondo-17(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span.text-dark Enlace <i class="text-dark">web</i>
                    i.text-dark.fas.fa-link
            .tarjeta.color-primario.p-3.mb-2
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Instructivo de análisis y síntesis de impacto
                .col-sm-auto
                  a.boton.fondo-17(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span.text-dark Enlace <i class="text-dark">web</i>
                    i.text-dark.fas.fa-link
            .tarjeta.color-primario.p-3.mb-2
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Instructiva metodología de valoración de riesgos ambientales 
                .col-sm-auto
                  a.boton.fondo-17(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span.text-dark Enlace <i class="text-dark">web</i>
                    i.text-dark.fas.fa-link
    //-titulo fondo azul
    .row.my-5(data-aos="fade-down-left")
      .col-auto.fondo-6.redondear.px-4.py-3.text-white
        h3.mb-0.text-center Valoración de impactos metodología EPM o Arboleda.
    p(data-aos="fade-down-right") Las metodologías no proporcionan respuestas completas a todas las preguntas sobre los impactos de un posible proyecto o conjunto de alternativas ni son libros de cocina que conduzcan a un fin con solo seguir las indicaciones.
    p(data-aos="fade-down-left") Canter y Sadler (1997) clasificaron las metodologías para la evaluación de impacto ambiental en veintidós grupos listados alfabéticamente y no en orden de importancia o de uso, los cuales se describen a continuación:

    .tarjeta.fondo-4.p-4.p-sm-5.mb-5
      SlyderA(tipo="b")(data-aos="fade-down-left")
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            h4 Analógicos.
            p Básicamente se remite a la información de proyectos existentes de un tipo similar al que está siendo analizado por un estudio de impacto. La información obtenida en la medición y seguimiento de los impactos ambientales actuales puede ser usada como una analogía a los impactos anticipados del proyecto propuesto. Además de que, clases similares de proyectos se pueden utilizar para un programa de seguimiento que desarrolle información sobre la huella del impacto de un proyecto propuesto.
        
          .col-md-6.col-12
            h3.text-center Métodos de evaluación de impacto ambiental subsector vial
            p.text-center Investigación documental
            .div.fondo-16
              p.text-center.mb-0 Evolución histórica de la metodología
            p.text-center Identificación de los más usados sector vial Colombia
            .div.fondo-16
              p.text-center.mb-0 Comparativo de metodologías aplicadas sector vial Colombia
              p.text-center Expediente ANLA 2014
            figure
              img(src='@/assets/curso/tema4/fig5.svg')
            p.fondo-16.mb-0.p-3.text-center Lineamientos metodológicos para le proceso de EIA en POA del subsector vial.
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            h4 Lista de chequeo.
            p Hay muchas variedades de listas de chequeo, este tipo de metodología es la más frecuentemente utilizada en los procesos de EIA. Típicamente, la lista de chequeo contiene una serie de puntos, asuntos de impacto o cuestiones que el usuario atenderá o contestará como parte del estudio de impacto. Tales listas de chequeo representan recordatorios útiles para identificar impactos y proporcionar una base sistemática y reproducible para el proceso de EIA.
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/tema4/fig6.svg')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            h4 Listas de chequeo enfocadas a decisiones.
            p Representan un grupo de métodos los cuales están inicialmente referidas a comparar alternativas y conducir a un análisis de equilibrio. En este considerando, tales métodos son inicialmente útiles para la síntesis de información de estudios de impacto. Cada alternativa viable está sujeta a estudio. El proceso de EIA consistiría de una fase de análisis y una fase de síntesis, las listas de chequeo para decisiones pueden ser útiles para ambas fases, con particular valor asociado a la fase de síntesis. Hay varios tipos listas de chequeo para decisiones y está fuera del alcance de este trabajo resumir completamente todos los tipos.
        
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/tema4/img3.png')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            h4 Análisis ambiental coste-beneficio (<i>Environmental Cost-Benefit Análysis ECBA</i>).
            p Este método complementa el tradicional análisis de coste-beneficio con una atención adicional a los recursos naturales y su valor económico. Su aplicación a la evaluación económica de impactos específicos de un proyecto propuesto y alternativos tiene considerables limitaciones. Las técnicas de estimación varían en complejidad y alcance, pero han tenido una considerable demanda entre los profesionales y usuarios de tales estudios (Azqueta, 1994).
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/tema4/img4.png')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            h4 Opinión de expertos.
            p Opinión de expertos, el cual también puede ser referido como Dictamen Profesional, representa un tipo ampliamente usado de métodos dentro del proceso de evaluación de impacto ambiental. Este método se utiliza normalmente para señalar los impactos específicos de un proyecto sobre los diferentes componentes medioambientales. Las herramientas específicas dentro de la categoría de opinión de expertos que pueden utilizarse para delinear información incluyen estudios Delphi y el uso del proceso adaptativo de evaluación ambiental. Con este enfoque los grupos de expertos identifican la información apropiada y elaboran modelos cualitativos/cuantitativos para la predicción de impactos o para simular procesos medioambientales.
        
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/tema4/img5.png')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            h4 Sistemas expertos.
            p Consiste en recoger el conocimiento profesional y el juicio de expertos en áreas temáticas específicas y de actualidad. Tal conocimiento es codificado, a través de una serie de reglas o experiencias prácticas (heurísticas), en entornos de sistemas informáticos computacionales. 
            p Los Sistemas Expertos son típicamente amigables al usuario y sólo requieren la respuesta a una serie de preguntas para conducir a un análisis particular. Se está incrementado la atención al desarrollo de sistemas expertos más exhaustivos para los procesos de EIA

          .col-md-6.col-12
            figure
              img(src='@/assets/curso/tema4/img6.png')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            h4 Índices o indicadores. 
            p Se refiere a características específicas o integradas de factores medioambientales o recursos. Se utilizan dentro de los estudios de impacto para representar parámetros de amplitud de medios o recursos. Específicamente, los índices se refieren a información numérica o bien información catalogada. Se usa como sistema auxiliar para describir los ambientes afectados, así como para la predicción y evaluación de impactos. 
            p Los índices numéricos o descriptivos se han desarrollado como una medida de la vulnerabilidad del medio ambiente y los recursos a la contaminación u otras acciones humanas y han probado su utilidad en la comparación de localizaciones para una actividad propuesta. Sobre estas bases, pueden ser formuladas las medidas para minimizar los impactos ambientales e incluir controles.
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/tema4/img7.png')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            h4 Pruebas de Laboratorio y Modelos a Escala.
            p Se pueden aplicar para conseguir información cualitativa / cuantitativa sobre impactos anticipados de un determinado tipo de proyecto en una localización geográfica dada. Aunque este tipo de métodos no han sido extensamente usados son apropiados para ciertos proyectos.
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/tema4/img8.png')
    h4.mt-5.mb-4(data-aos="fade-down-left") Evaluación de Paisajes. 
    p.mb-5(data-aos="fade-down-left") Son inicialmente útiles para la valoración de recursos estéticos o visuales. Tales métodos están basados típicamente en el desarrollo de información derivada de una serie de indicadores y la subsiguiente adición de dicha información sobre una puntuación global o índice para el escenario ambiental. Esta información puede ser usada como representativa de las condiciones de partida. El potencial impacto estético o visual de un proyecto propuesto puede entonces ser estimado otra vez sobre los registros base o índices, por ejemplo, la comparación con y sin proyecto.
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4.mb-lg-0.fondo-2.p-5(data-aos="fade-down-right")
        h4 Revisión bibliográfica
        p.mb-0 Supone ensamblar información sobre los tipos de proyectos y su impacto típico. Como se notará, por analogías, este tipo de información puede ser muy útil para la pronta definición de impactos potenciales. Puede también ser usado para cuantificar anticipadamente, cambios específicos e identificar las medidas de mitigación para minimizar efectos indeseables. Actualmente está disponible una abundante información sobre impactos típicos de algunos proyectos.
      .col-lg-6.col-md-6.col-8(data-aos="fade-down-left")
        img(src='@/assets/curso/tema4/img9.jpg')
    TabsA.color-acento-contenido.my-5
      .tarjeta.fondo-4.p-4(titulo="Cálculos de balance de materia")
        .row.justify-content-around.align-items-center
          .col-xl-11
            h4 Cálculos de balance de materia. 
            p  Están basados inicialmente en inventarios de condiciones existentes para compararlas con los cambios que resultarán de una acción propuesta. Tales inventarios son frecuentemente usados en los procesos de EIA en el contexto de las emisiones de contaminantes al aire, al agua, y la generación de residuos sólidos y peligrosos. Los cálculos de balance de materia requieren la descripción del área de estudio para establecer las condiciones iniciales. Una manera de expresar el impacto es considerar los cambios absolutos y porcentuales en el inventario (o balance de materia) como resultado de una acción propuesta.

      .tarjeta.fondo-4.p-4(titulo="Matrices de interacción")
        .row.justify-content-around.align-items-center
          .col-xl-11
            h4 Matrices de interacción
            p Representan un tipo de método ampliamente usado en los procesos de EIA. Las variaciones de las matrices sencillas de interacción han sido desarrolladas para enfatizar rasgos característicos deseables, las matrices representan un tipo de método muy útil para el estudio de diversas actividades dentro de los procesos de EIA.

      .tarjeta.fondo-4.p-4(titulo="Monitorización")
        .row.justify-content-around.align-items-center
          .col-xl-11
            h4 Monitorización.
            p Se refiere a mediciones sistemáticas para establecer las condiciones existentes de los ambientes afectados, así como dotar de una base inicial de datos para interpretar la importancia de cambios anticipados de un proyecto propuesto. La monitorización podría enfocarse a los ambientes fisicoquímico, biológico, cultural y/o socioeconómico. La selección de indicadores apropiados para el seguimiento deberá ser realizado tanto en función de la disponibilidad de la información existente como del tipo de proyecto y de los impactos previstos.
      
      .tarjeta.fondo-4.p-4(titulo="Estudios de campo")
        .row.justify-content-around.align-items-center
          .col-xl-11
            h4 Estudios de campo.
            p Representa un tipo de método muy especializado. Específicamente, monitorización y análisis de impactos evidentes, manifestados actualmente a consecuencia del proyecto, resultantes de proyectos similares al proyecto del que se quiere prevenir los impactos. Una vez más, el énfasis se dará al seguimiento de indicadores seleccionados pertinentemente para el tipo de proyecto
    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0.fondo-2.p-5(data-aos="fade-down-right")
        h4 Redes
        p.mb-0 Se refiere a un grupo de métodos que definen las conexiones o relaciones entre acciones proyectadas e impactos resultantes. Estos tipos de métodos están referenciados de alguna manera con la práctica de EIA, por ejemplo, árboles de impacto, impacto de cambios, diagramas causa-efecto o diagramas de consecuencias. Las redes son útiles para mostrar las relaciones entre impactos primarios, secundarios y terciarios, resultantes de acciones particulares. Pueden también ser utilizados junto con matrices como una herramienta para la identificación de impactos y la predicción cualitativa de los mismos.
      .col-lg-6.col-md-6.col-8(data-aos="fade-down-left")
        img(src='@/assets/curso/tema4/img10.jpg')
    //--pestañas tipo c
    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Sobreposición de mapas")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/tema4/img11.jpg')
          .col-md-6.mb-4.mb-md-0
            h4 Sobreposición de mapas
            p  Propuesto por <i>McHarg</i> (1969) ha servido de base a otros métodos utilizados en la actualidad cuando se trata de localizar un pasillo o trazo lineal para vías de acceso, gasoductos o líneas de transmisión de energía eléctrica. Fue usado desde que comenzaron a requerirse las EIA, inicialmente consistió en un ensamble físico de mapas que desplegaban diferentes características ambientales, ahora se hace digitalmente. La tecnología de los sistemas de información geográfica (GIS) es una herramienta inspirada en este tipo de método bastante útil en los procesos de EIA. La sobreposición cartográfica de transparencias, físicamente o digitalizada, se usa para describir condiciones existentes y desplegar cambios potenciales resultantes de una acción propuesta.

      .py-3.py-md-4(titulo="Fotografías o montajes")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img12.jpg')
          .col-md-6
            h4 Fotografías o montajes
            p Fotografías o fotomontajes son útiles como herramientas para propósitos de desplegar la calidad visual del ambiente seleccionado e identificar los potenciales impactos visuales de una acción propuesta. En ese considerando, esta aplicación está relacionada con los métodos de evaluación del paisaje descritos anteriormente, con la ventaja adicional del uso de la fotografía digitalizada.
        
      .py-3.py-md-4(titulo="Modelización cualitativa")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img13.jpg')
          .col-md-6
            h4  Modelización cualitativa
            p  Se refiere a un grupo de métodos en el que, información descriptiva es utilizada para relacionar varias acciones con cambios resultantes en los componentes ambientales. Como tal, puede ser considerada como una extensión de las categorías de redes de trabajo descritas anteriormente. El enfoque general del modelaje cualitativo está en la comprensión de las interrelaciones fundamentales de los aumentos o disminuciones en ciertos rasgos ambientales como resultado de acciones particulares. En muchos casos, el modelaje cualitativo representa el único tipo de método disponible para la predicción de impactos. Nótese que está típicamente basado en opiniones de expertos (dictámenes profesionales) como se describió oportunamente.

      .py-3.py-md-4(titulo="Modelización cuantitativa (matemática)")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/img14.jpg')
          .col-md-6
            h4 Modelización cuantitativa (matemática)
            p  Se refiere a un extenso grupo de métodos, usados específicamente para prestar atención anticipadamente a los cambios en el medio ambiente o los recursos, como resultado de acciones propuestas. Tales modelos pueden variar desde versiones simplificadas a muy complicadas simulaciones tridimensionales basadas en ordenador que requieren de una gran cantidad de datos. Es importante reconocer que los modelos cuantitativos están disponibles para muchas de las áreas típicas de impactos asociados con proyectos particulares. Por ejemplo, hay algunos modelos de dispersión que se pueden usar para conocer anticipadamente los impactos en la calidad del aire por fuentes fijas de emisión de propuestas de incineradores de residuos peligrosos o de plantas de producción de electricidad que queman combustibles fósiles; igualmente, existen modelos de dispersión para prever la calidad del agua en los casos de vertidos contaminantes a cuerpos receptores de agua superficial y subterránea.
    //-dos columnas de texto
    .row.justify-content-around.my-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0.fondo-2.p-4.separar(data-aos="fade-down-right")
        p.text-bold Construcción de escenarios
        p Involucra consideraciones alternativas futuras como resultado de suposiciones iniciales diferentes. Esta técnica se utiliza en las áreas de planeación, pero también tiene aplicabilidad en EIA, particularmente en el contexto de la Evaluación Ambiental Estratégica (SEA) de políticas, planes y programas.
      .col-lg-6.col-md-12.fondo-2.p-4.separar(data-aos="fade-down-left")
        p.text-bold Extrapolación de tendencias
        p Utiliza tendencias históricas y las proyecta al futuro basada en suposiciones asociadas a condiciones de cambio continuo. Tales métodos son particularmente valiosos cuando se enfocan a condiciones ambientales futuras sin que haya necesariamente una acción propuesta.
    //- Conversación
    .row.no-mostrarmenor1200
      .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/chico.svg")
      .col-lg-8.col-6
        .row 
          .col-lg-1.col-2.mb-4.mb-lg-0.me-0.pe-0.mt-2(data-aos="fade-down-right")
            img.me-0(src="@/assets/curso/tema3/flechazul.svg")
          .col-lg-9.col-10.fondo-4.p-md-4.p-3.ms-0(data-aos="fade-down-left")  
            p.mb-0 Para seleccionar una metodología, se recomienda tomar en cuenta algunas características importantes como: si da una visión global, si es selectivo, mutuamente excluyente, si considera la incertidumbre, si es objetivo e interactivo.
          .col-1
          .col-lg-2.col-1 
          .col-lg-9.col-7.fondo-3.p-md-4.p-3.me-0.mt-2(data-aos="fade-down-left")  
            p.mb-0 Entre las varias metodologías generales existentes cualitativas y/o cuantitativas más usadas son:  Listas de chequeo; Diagramas de redes; Superposición de mapas y Matrices causa - efecto 
          .col-lg-1.col-2.mb-4.mb-lg-0.ms-0.ps-0.mt-3(data-aos="fade-down-right")
            img.ms-0(src="@/assets/curso/tema3/flechaverde.svg")
      .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/chica.svg")

    .row.no-mostrarmayor1201
      .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/chico.svg")
      .col-lg-10.col-9
        .row 
          .col-lg-1.col-2.mb-4.mb-lg-0.me-0.pe-0.mt-2(data-aos="fade-down-right")
            img.me-0.p-0.py-sm-3.p-md-0(src="@/assets/curso/tema3/flechazul.svg")
          .col-lg-11.col-10.fondo-4.p-md-4.p-3.ms-0(data-aos="fade-down-left")  
            p.mb-0 Para seleccionar una metodología, se recomienda tomar en cuenta algunas características importantes como: si da una visión global, si es selectivo, mutuamente excluyente, si considera la incertidumbre, si es objetivo e interactivo.
      .row.my-3
        .col-lg-9.col-7.fondo-3.p-md-4.p-3.me-0.mt-2(data-aos="fade-down-left")  
          p.mb-0 Entre las varias metodologías generales existentes cualitativas y/o cuantitativas más usadas son:  Listas de chequeo; Diagramas de redes; Superposición de mapas y Matrices causa - efecto 
        .col-lg-1.col-2.mb-4.mb-lg-0.ms-0.ps-0.mt-3(data-aos="fade-down-right")
          img.ms-0.p-0.py-sm-4.pe-sm-3(src="@/assets/curso/tema3/flechaverde.svg")
        .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
          img(src="@/assets/curso/tema3/chica.svg")
    //-Lamado a la acción
    .row.justify-content-center.my-5
      .col-lg-10.col-md-12.fondo-12.p-3.p-md-5.mb-5(data-aos="fade-down-left")
        .row
          .col-lg-1.col-2
            img(src="@/assets/curso/tema4/fig4.svg")
          .col-10
            h5 ¡Estimado Aprendiz!
            .tarjeta.color-primario.p-3.mb-2.mt-5
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Manual, para la evaluación de impactos ambiental de proyecto, obra o actividad
                .col-sm-auto
                  a.boton.fondo-17(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span.text-dark Enlace <i class="text-dark">web</i>
                    i.text-dark.fas.fa-link
    Separador
    #t_4_3.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 4.3 Metodología para la identificación y valoración de riesgos ambientales GTC 104 de 2009.
    p.mb-5 Respetado aprendiz, revise la siguiente información Cada punto es importante, por tanto, revise los pasos y las metodologías a emplear:   
    h4 Paso 1 Recolección de información de acuerdo con la organización o proyecto.
    p.mb-5 Indagar sobre los siguientes elementos en la organización o proyecto. Para este proceso se utilizan herramientas de búsqueda o diagnóstico:
    .row.justify-content-center
      .col-lg-10.col-md-12.pt-5.ps-0.pb-0.fondo-2
        .row
          .col-2
            img(src="@/assets/curso/tema4/chico2.svg")
          .col-10 
            p.mb-0 Se indaga sobre los objetivos organizacionales de su proyecto formativo. 
            p.mb-0 Se Describen los procesos productivos que se llevan a cabo al interior de la empresa. 
            p.mb-0 Se Identifican los alcances de la operación de la empresa que hace parte del proyecto formativo. 
            p.mb-0 Se Identifican los Stakeholders de la empresa. 
            p.mb-0 Se Reconoce las técnicas actuales de comunicación interna y externa realizada por la organización. 
            p.mb-0 Se listan los componentes del ambiente que se ven afectados por el desarrollo de la actividad  económica.
            p.mb-0 Se Identifican los sistemas de gestión implementados en la empresa. 
            p.mb-0 Se listan los recursos disponibles para llevar a cabo la valoración del riesgo. 
            p.mb-3 Se identifique el contexto Interno y externo de la organización. Para este punto, puede guiarse de la NTC-IEC-ISO31010 o en la ISO 14001: 2015. 
    h4.mt-5 Paso 2 Análisis de datos e información.
    p.mb-5 Una vez recolectada la información se procede a hacer un análisis que permita organizar datos recolectados. Para esto se utilizan matrices de Excel dónde consignan datos relevantes identificados.
    h4 Paso 3 Identificación del riesgo. 
    p.mb-5 El propósito de la identificación del riesgo es identificar lo que podrá suceder o cuales situaciones podrían existir que afecten el logro de los objetivos del sistema o la organización.
    .row.justify-content-center.mb-5
      .col-lg-8.col-md-10.col-12.fondo-2
        .row.justify-content-center
          .col-lg-8.col-12.my-4.order-lg-first.order-last
            h5.text-center Los métodos para valorar el riesgo pueden incluir:
            p.text-center.mb-0 Métodos basados en evidencias. 
            p.text-center.mb-0 Enfoques sistemáticos en equipos. 
            p.text-center.mb-0 Técnicas de razonamiento inductivo.
          .col-lg-2.col-sm-3.col-4.order-first.order-lg-last
            img.subir(src="@/assets/curso/tema3/chica.svg")
    p En ese sentido es importante tener en cuenta la siguiente caja de herramientas presentada en la norma NTC-IEC-ISO31010, anexo Tabla A.1, la cual puede consultar en la biblioteca SENA: 
      a.boton--sm.color-primario.me-3(:href="('http://biblioteca.sena.edu.co/')" target="_blank")
        span Enlace <i>web</i>
        i.fas.fa-link
      span e ir a ICONTEC,  buscar la norma NTC  ISO31010, anexo Tabla A.1
    p.mb-5 Ver matriz Procesos sistemáticos para identificar impactos ambientales.
    h5.text-center.mb-3 Tabla 1. Procesos sistemáticos para identificar impactos ambientales
    //- tabla C
    .row.justify-content-center.mb-5
      .col-lg-8.col-md-10.col-12.mb-4.mb-lg-0
        .tabla-c
          table
            tr.text-center
              <td class="anchocol fondo-18 bordes" rowspan="2">
                p.mb-0 Componentes del medio ambiente.
              </td>
              td.text-white.fondo-6.bordes
                p.mb-0 Aspectos ambientales
            tr
              td.fondo-10.bordes
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center Social
              td.bordes

            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center Suelo
              td.bordes
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center Agua
              td.bordes
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center Aire
              td.bordes
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center Suelo
              td.bordes
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Autores (2020) tabla ajustada de la NTC 104. Gestión el riesgo ambiental procesos sistémicos.
    h4 Paso 4 Análisis de riesgos.
    p.mb-0 Análisis cualitativo
    p.mb-5 Para realizar el análisis cualitativo se debe tener en cuenta las siguientes tablas. 
    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 2. Medición cualitativa de la posibilidad.
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.anchocol.bordes
                p.mb-0 Nivel
              td.text-white.fondo-6.anchocol.bordes
                p.mb-0 Descriptor
              td.text-white.fondo-6.bordes
                p.mb-0 Descripción
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center A
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Casi seguro
              td.bordes
                p.mb-0.text-center Se espera que ocurra en la mayoría de las circunstancias.
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center B
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Probable
              td.bordes
                p.mb-0.text-center Probablemente ocurra en la mayoría de las circunstancias.
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center C
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Posible
              td.bordes
                p.mb-0.text-center Podría ocurrir.
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center D
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Improbable
              td.bordes
                p.mb-0.text-center Podría ocurrir, pero no se espera.
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center E
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Raro
              td.bordes
                p.mb-0.text-center Ocurre solamente en circunstancias excepcionales.
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Fuente: ICONTEC (2009) GTC 104. Gestión el riesgo ambiental. Tabla 4A p.34.
    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 3. Mediciones cualitativas de impacto.
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.anchocol.bordes
                p.mb-0 Nivel
              td.text-white.fondo-6.anchocol1.bordes
                p.mb-0 Descriptor
              td.text-white.fondo-6.bordes
                p.mb-0 Descripción
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center 1
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Catastrófico
              td.bordes
                p.mb-0.text-center Muerte, liberación de tóxicos en lugares alejados con efecto nocivo, enormes costos financieros.
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center 2
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Importante
              td.bordes
                p.mb-0.text-center Lesiones extensas, pérdida de la capacidad productiva, liberación en lugares alejados contenida con asistencia externa y poco impacto nocivo, perdida fianciera importante.
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center 3
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Moderado
              td.bordes
                p.mb-0.text-center Exige tratamiento médico, liberación en el lugar contenida con asistencia externa, pérdida financiera alta.
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center 4
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Secundario
              td.bordes
                p.mb-0.text-center Tratamiento de primeros auxilios, liberación en el sitio contenida inmediatamente, pérdida financiera media.
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center 5
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Insignificante
              td.bordes
                p.mb-0.text-center Sin lesiones, pérdida financiera baja, impacto ambiental insignificante.
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Fuente: ICONTEC (2009) GTC 104. Gestión el riesgo ambiental. Tabla 4B p.35.

    //- tabla C
    .row.justify-content-center.mb-5
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 4. Matriz de nivel de riesgo.
        .tabla-c
          table
            tr
              <td class="anchocol fondo-6 bordes text-white" rowspan="2">
                p.mb-0 Nivel
              </td>
              <td class="text-center anchocol fondo-10 bordes" colspan="5">Consecuencia</td>
            tr.text-center
              td.text-white.fondo-6.anchocol
                p.mb-0 Catastrófica
              td.text-white.fondo-6
                p.mb-0 Importante
              td.text-white.fondo-6
                p.mb-0 Moderada
              td.text-white.fondo-6
                p.mb-0 Menor
              td.text-white.fondo-6.bordes
                p.mb-0 Insignificante
            tr.fondo-10.text-center
              td.anchocol.bordes.fondo-18 Casi seguro
              td.bordes.fondo-18.anchocol E
              td.bordes.fondo-10 E
              td.bordes.fondo-10 E
              td.bordes.fondo-10 A
              td.bordes.fondo-10 A
            tr.fondo-10.text-center
              td.anchocol.bordes.fondo-18 Probable
              td.bordes.fondo-18.text-center.anchocol E
              td.bordes.fondo-10 E
              td.bordes.fondo-10 A
              td.bordes.fondo-10 A
              td.bordes.fondo-10 M
            tr.fondo-10.text-center
              td.anchocol.bordes.fondo-18 Posible
              td.bordes.fondo-18.anchocol E
              td.bordes.fondo-10 E
              td.bordes.fondo-10 A
              td.bordes.fondo-10 M
              td.bordes.fondo-10 A
            tr.fondo-10.text-center
              td.anchocol.bordes.fondo-18 Improbable
              td.bordes.fondo-18.anchocol E
              td.bordes.fondo-10 A
              td.bordes.fondo-10 M
              td.bordes.fondo-10 B
              td.bordes.fondo-10 A
            tr.fondo-10.text-center
              td.anchocol.bordes.fondo-18 Raro
              td.bordes.fondo-18.anchocol A
              td.bordes.fondo-10 A
              td.bordes.fondo-10 M
              td.bordes.fondo-10 B
              td.bordes.fondo-10 A
            tr
              <td class="fondo-10 bordes" colspan="6">
                .row
                  .col-6
                    p Convenciones:
                    p.mb-0 E = Riesgo extremo, exige acción inmediata.
                    p A = Riesgo alto, es necesaria la atención por parte de la alta dirección.
                  .col-6
                    br 
                    p.mb-0 M = Riesgo moderado se debe especificar la responsabilidad.
                    p B = Riesgo bajo, gestionado mediante procedimientos de rutina
              </td>
        .row.mt-3.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Fuente: ICONTEC (2009) GTC 104. Gestión el riesgo ambiental. Tabla 4C p.36
    p.mb-5 Con base en la información analizada de acuerdo con la naturaleza de su proyecto formativo, se diligencia la siguiente matriz, la cual puede ser modificada de acuerdo con necesidades. 

    //- tabla C
    .row.justify-content-center.mb-5
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5. Matriz de registro de análisis de riesgos
        .tabla-c
          table
            tr
              <td class="fondo-6 bordes text-white anchocol3" rowspan="2">
                p.mb-0 Aspecto ambiental o riesgo identificado en la organización
              </td>
              <td class="text-center anchocol4 fondo-10 bordes" colspan="5"></td>
            tr.text-center
              td.text-white.fondo-6.anchocol4
                p.mb-0 Impacto
              td.text-white.fondo-6
                p.mb-0 Posibilidad
              td.text-white.fondo-6.bordes
                p.mb-0 Nivel de riesgo
            tr.fondo-10.text-center
              td.bordes.fondo-18.anchocol3 Vertimientos con sustancias toxicas
              td.bordes.fondo-10.anchocol4 1 (Catastrófico)
              td.bordes.fondo-10 B (Probable)
              td.bordes.fondo-10 E (Riesgo Extremo)
            tr.fondo-10.text-center
              td.bordes.fondo-18.anchocol3 Incumplimiento de requisitos legales
              td.bordes.fondo-10.text-center.anchocol4 1 (Catastrófico)
              td.bordes.fondo-10 A (Casi seguro)
              td.bordes.fondo-10 E (Riesgo Extremo)
            tr.fondo-10.text-center
              td.bordes.fondo-18.anchocol3
              td.bordes.fondo-10.anchocol4
              td.bordes.fondo-10 
              td.bordes.fondo-10 
            tr.fondo-10.text-center
              td.bordes.fondo-18.anchocol3
              td.bordes.fondo-10.anchocol4
              td.bordes.fondo-10
              td.bordes.fondo-10 
            tr.fondo-10.text-center
              td.bordes.fondo-18.anchocol3 
              td.bordes.fondo-10.anchocol4
              td.bordes.fondo-10 
              td.bordes.fondo-10
        .row.mt-3.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Nota: La matriz presenta ejemplos para su diligenciamiento, tenerlos en cuanta solo como guía./ Autores (2020) tabla de la NTC 104. Matriz registro de análisis de riesgos.
    h4 Paso 5 Valoración del riesgo. 
    p.mb-0 Teniendo en cuenta el Anexo B de la norma NTC-IEC-ISO31010 y el Numeral 2.6 de la GTC 104 y la estrategia seleccionada se, diseña un formato para valorar los riesgos. La valoración del riesgo debe ir enfocada a la naturaleza de la empresa o proyecto, a continuación, un ejemplo. 
    .row.justify-content-center
      .col-lg-6.col-md-8.col-sm-10.col-12.p-4
        h5.mb-3 Gráfico 1. Categorías del riesgo. 
        img(src="@/assets/curso/tema4/grafica.svg")
        .row.mt-3.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Fuente: ICONTEC (2009) GTC 104. Gestión el riesgo ambiental.p.42
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
