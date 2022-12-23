<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero
        span 3
      h1 Bases conceptuales para la Evaluación y Valoración de los aspectos, impactos y riesgos ambientales
    img(data-aos="fade-down-left").my-5(src="@/assets/curso/tema3/img1.jpg") 
    Separador
    #t_3_1.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.1 Introducción
    ImagenInfografica.color-secundario.my-5(data-aos="fade-down-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/img2.svg')
      .tarjeta.fondo-4.p-3(x="12%" y="45%" numero="1")
        p Es obvio que, si el impacto ambiental es el resultado de la interacción entre un proyecto o actividad propuesta y el ambiente, para identificar los impactos es indispensable empezar por un buen conocimiento del proyecto, obra o actividad propuesto, de sus componentes, sus procesos constructivos y operativos, las etapas de desarrollo que comprende, etc. 

      .tarjeta.fondo-4.p-3(x="35%" y="50%" numero="2")
        p Es por esto que es indispensable describir cuales son los procesos que se llevan a cabo al interior de la organización o proyecto para llegar a la identificación de los aspectos e impactos ambientales. 

      .tarjeta.fondo-4.p-3(x="55%" y="50%" numero="3")
        p Se requiere entonces realizar una lectura de la información técnica, de ingeniería y operacional del proyecto “con ojos ambientales”, es decir, realizar un análisis de la documentación correspondiente con la finalidad de detectar aquellas acciones (actividades, operaciones, procedimientos, elementos, aspectos, tareas, etc.) del proyecto, obra o actividad que están relacionándose de cualquier manera con el medio ambiente, porque son éstas las que producirán, directa o indirectamente, los cambios en algunos de los componentes de dicho entorno.

      .tarjeta.fondo-4.p-3(x="75%" y="50%" numero="4")
        p Estas acciones se denominan: Acciones susceptibles de producir impacto (ASPI), por tanto, se requiere identificar los aspectos e impactos relacionados.

      .tarjeta.fondo-4.p-3(x="90%" y="45%" numero="5")
        p Se relaciona según Arboleda, un listado general de aspectos ambientales y su correspondiente impacto ambiental
    p.mb-5(data-aos="fade-down-right") A continuación, se relacionan algunas tablas que se relacionan en el Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.
    .row.justify-content-center.mb-4
      .col-lg-8.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        .tarjeta.fondo-5.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.p-4
              img(src="@/assets/curso/tema3/fig1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white 
                  h3.mb-1 ¡Estimado Aprendiz!
                  p.text-small Listado general de aspectos e impactos ambientales.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/embed/buPSHHPnPzk')" target="_blank")
                    span.text-dark Enlace web
                    i.fas.fa-link  
    .row.mb-5
      .col-2.me-0.pe-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/fig2.svg")
      .col-10.fondo-4.p-5(data-aos="fade-down-left")
        h4 Ejemplo 1: 
        span Identificación de áreas, procesos y componentes de un proyecto, obra o actividad.
        p Fabrica por construir y localizada en zona rural
        .row.justify-content-center
          .col-lg-6.col-12.mb-4.mb-lg-0
            .tabla-c
              table
                tr.text-center.fondo-6.text-white
                  td.anchocol
                    h4.mb-0 ETAPA
                  td.anchocol1
                    h4.mb-0 COMPONENTES                
                tr
                  td.anchocol.bordes Construcción
                  td.anchocol1.bordes
                    p.mb-0 Carreteras
                    p.mb-0 Acueducto
                    p.mb-0 Línea eléctrica
                    p.mb-0 Fábrica
                tr
                  td.anchocol.bordes Funcionamiento
                  td.anchocol1.bordes 
                    p.mb-0 Planta de producción
                    p.mb-0 Bodegas
                    p.mb-0 Restaurante
                    p.mb-0 Zona almacenamiento de combustibles
                    p.mb-0 Talleres
                    p.mb-0 Depósitos de basuras
          .col-lg-6.col-md-8.col-10
            img(src="@/assets/curso/tema3/img3.png")
    span.fuente-18px.mt-5(data-aos="fade-down-right") Ejemplo 2: 
    span(data-aos="fade-down-right") Diagrama de flujo para la fabricación de mantequilla, con sus respectivas entradas y salidas identificando aspectos ambientales.
    .row.justify-content-center.my-5
      .col-lg-10.col-md-12.fondo-7.px-4.py-5(data-aos="fade-down-right")
        .row.justify-content-center.mb-4
          .col-lg-3.col-4.fondo-8.py-sm-4.py-3.px-0.px-sm-2
            h4.text-center.mb-0 Entradas / Materias primas / Demandas de RRNN
          .col-lg-3.col-4.fondo-8.mx-lg-4.mx-1.py-5.anchocolumna.px-0.px-sm-2
            h4.text-center.mb-0 Proceso
          .col-lg-3.col-4.fondo-8.py-sm-4.py-3.px-0.px-sm-2
            h4.text-center.mb-0 Salidas / Residuos / Efluentes / Emisiones
        .row.justify-content-center.align-items-center.no-mostrarmenor576.mb-2
          .col-3
            p Agua y leche cruda
          .col-1.pe-0.me-0
            img(src="@/assets/curso/tema3/flechaizq.svg")
          .col-lg-3.col-sm-4.col-3.fondo-8.py-4
            p.text-center.mb-0 Recepción y almacenamiento leche
          .col-1.ps-0.ms-0
            img(src="@/assets/curso/tema3/flechader.svg")
          .col-3
            p Agua de lavado
        .row.justify-content-center.align-items-center.no-mostrarmenor576.mb-2
          .col-3
          .col-1.pe-0.me-0
          .col-lg-3.col-sm-4.col-3.fondo-8.py-4
            p.text-center.mb-0 Filtración
          .col-1.ps-0.ms-0
            img(src="@/assets/curso/tema3/flechader.svg")
          .col-3
            p Residuos sólidos
        .row.justify-content-center.align-items-center.no-mostrarmenor576.mb-2
          .col-3
            p Energía
          .col-1.pe-0.me-0
            img(src="@/assets/curso/tema3/flechaizq.svg")
          .col-lg-3.col-sm-4.col-3.fondo-8.py-4
            p.text-center.mb-0 Batido
          .col-1.ps-0.ms-0
            img(src="@/assets/curso/tema3/flechader.svg")
          .col-3
            p Grasa, Suero, Carga orgánica, Ruido
        .row.justify-content-center.align-items-center.no-mostrarmenor576.mb-2
          .col-3
            p Agua
          .col-1.pe-0.me-0
            img(src="@/assets/curso/tema3/flechaizq.svg")
          .col-lg-3.col-sm-4.col-3.fondo-8.py-4
            p.text-center.mb-0 Lavado
          .col-1.ps-0.ms-0
            img(src="@/assets/curso/tema3/flechader.svg")
          .col-3
            p Grasa, Suero, Residuos sólidos, Olores
        .row.justify-content-center.align-items-center.no-mostrarmenor576.mb-2
          .col-3
            p Empaques
          .col-1.pe-0.me-0
            img(src="@/assets/curso/tema3/flechaizq.svg")
          .col-lg-3.col-sm-4.col-3.fondo-8.py-4
            p.text-center.mb-0 Empaque
          .col-1.ps-0.ms-0
            img(src="@/assets/curso/tema3/flechader.svg")
          .col-3
            p Residuos sólidos

        .row.justify-content-center.align-items-center.no-mostrarmayor576.mb-3
          .col-3
            p Agua y leche cruda
          .col-lg-3.col-6.fondo-8.py-4
            p.text-center.mb-0 Recepción y almacenamiento leche
          .col-3
            p Agua de lavado
        .row.justify-content-center.align-items-center.no-mostrarmayor576.mb-3
          .col-3
          .col-lg-3.col-6.fondo-8.py-4
            p.text-center.mb-0 Filtración
          .col-3
            p Residuos sólidos
        .row.justify-content-center.align-items-center.no-mostrarmayor576.mb-3
          .col-3
            p Energía
          .col-lg-3.col-6.fondo-8.py-4
            p.text-center.mb-0 Batido
          .col-3
            p Grasa, Suero, Carga orgánica, Ruido
        .row.justify-content-center.align-items-center.no-mostrarmayor576.mb-3
          .col-3
            p Agua
          .col-lg-3.col-6.fondo-8.py-4
            p.text-center.mb-0 Lavado
          .col-3
            p Grasa, Suero, Residuos sólidos, Olores
        .row.justify-content-center.align-items-center.no-mostrarmayor576.mb-3
          .col-3.ps-0.ps-sm-2
            p Empaques
          .col-lg-3.col-6.fondo-8.py-4.mx-0
            p.text-center.mb-0 Empaque
          .col-3
            p Residuos sólidos
      .row.mt-3.justify-content-center.px-0
        .col-lg-10.col-12.fondo-9.mx-0.py-3
          p.fuente-14px.mb-0 Fuente: Jorge A, A (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades. Pág. 25.
    span.fuente-18px.mt-5(data-aos="fade-down-right") Ejemplo 3: 
    span(data-aos="fade-down-right") Descripción de las ASPI (acciones susceptibles de producir impactos), de un proyecto, obra o actividad
    .row.justify-content-center.my-5
      .col-lg-10.col-12.mb-4.mb-lg-0.fondo-7.p-5(data-aos="fade-down-right")
        .tabla-c
          table
            tr.text-center.fondo-6.text-white
              td.anchocol
                h4.mb-0 ETAPA
              td.anchocol2
                h4.mb-0 SUB - ETAPA / FASE
              td
                h4.mb-0 ACCIONES SUSCEPTIBLES DE PRODUCIR IMPACTO
            tr.fondo-10
              td.anchocol.bordes
              td.anchocol2.bordes
                p.mb-0 Levantamiento, construcción y montaje de equipos e infraestructura 
              td.bordes
                p.mb-0 Transporte y acarreos
                p.mb-0 Excavaciones (cortes, llenos, conformación de terraplenes, ect)
                p.mb-0 Operación maquinaria y equipos
                p.mb-0 Disposición de sobrantes de excavaciones
                p.mb-0 Levantamiento de estructura 
                p.mb-0 Funcionamiento de campamentos
                p.mb-0 Mantenimiento de maquinaria y equipos
                p.mb-0 Construcción puentes, obras de arte, transversales, etc.
                p.mb-0 Voladuras
                p.mb-0 Montaje de torre y tendido de líneas
                p.mb-0 Conformación de túneles y cavernas.
            tr.fondo-10
              td.anchocol.bordes Operación y mantenimiento
              td.anchocol2.bordes 
              td.bordes
                p.mb-0 Triturado del material
                p.mb-0 Clasificación del material
                p.mb-0 Transporte y acarreos
                p.mb-0 Procesos productivos o de funcionamiento (cada proceso productivo tiene sus actividades particulares)
                p.mb-0 Almacenamiento de combustibles, materias primas y otros insumos.
                p.mb-0 Mantenimiento maquinaria y equipos
                p.mb-0 Funcionamiento de campamentos y restaurantes
                p.mb-0 Energización líneas de transmisión
                p.mb-0 Turbinado
                p.mb-0 Apertura de compuertas de verdadero y descarga de fondo
                p.mb-0 Mantenimiento de vías
      .row.mt-3.justify-content-center.px-0
        .col-lg-10.col-12.fondo-9.mx-0.py-3
          p.fuente-14px.mb-0 Fuente: Jorge A, A (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades. Pág. 25.
    span.fuente-18px.mb-5(data-aos="fade-down-right") Ejemplo 4: 
    span(data-aos="fade-down-right") Descripción de ASPI, ASPECTOS e IMPACTOS ambientales de un proyecto, obra o actividad.
    .row.justify-content-center.my-5
      .col-lg-10.col-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        .tabla-c
          table.fondo-10
            tr.text-center
              td.anchocol.bordesder.bordesabajo
                h4.mb-0 ASPI
              td.bordesder.anchocol1
                h4.mb-0 ASPECTO AMBIENTAL
              td.bordesabajo
                h4.mb-0 IMPACTO AMBIENTAL
            tr.fondo-10
              <td class="fondo-10 bordesabajo anchocol" rowspan="5">
                p.mb-0.orientacion-vert.ms-2 Remoción Vegetal y descapote
              </td>
              td.bordes1.anchocol1
                p.mb-0 Intervención del suelo
              td.bordesabajo
                p.mb-0 Alteración de las propiedades fisicoquímicas del suelo
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Intervención de la cobertura vegetal
              td.bordesabajo
                p.mb-0 Procesos erosivos
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Intervención de la fauna
              td.bordesabajo
                p.mb-0 Afectaciones de la avifauna
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Generación de excedentes de excavación
              td.bordesabajo
                p.mb-0 Contaminación del suelo
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Aporte de sedimentos a los sistemas hídricos
              td.bordesabajo
                p Afectación del ciclo hidrológico 
                p.mb-0 Contaminación del recurso hídrico

            tr.fondo-10
              <td class="fondo-10 bordesabajo anchocol" rowspan="7">
                p.mb-0.orientacion-vert.ms-2 Demolición de estructuras existentes
              </td>
              td.bordes1.anchocol1
                p.mb-0 Emisión de gases y/o material particulado
              td.bordesabajo
                p.mb-0 Contaminación del aire
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Intervención del suelo
              td.bordesabajo
                p.mb-0 Aberración de las propiedades fisicoquímicos
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Generación de escombros
              td.bordesabajo
                p.mb-0 Contaminación del suelo
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Consumo de Energía
              td.bordesabajo
                p.mb-0 Contaminación del aire
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Intervención de cuerpos de agua
              td.bordesabajo
                p.mb-0 Contaminación del recurso hídrico
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Emisión de ruido
              td.bordesabajo
                p.mb-0 Contaminación del aire
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Aporte de sedimentos a los sistemas hídricos
              td.bordesabajo
                p.mb-0 Alteración de la calidad del agua
        
            tr.fondo-10
              <td class="fondo-10 bordesabajo anchocol" rowspan="7">
                p.mb-0.orientacion-vert.ms-2 Cont. Instalaciones temporales
              </td>
              td.bordes1.anchocol1
                p.mb-0 Generación de residuos sólidos
              td.bordesabajo
                p.mb-0 Contaminación del suelo y cuerpos de aguas
            tr.fondo-10
              <td class="bordes1 anchocol1" rowspan="2">
                p.mb-0 Aporte de sedimentos a los sistemas hídricos
              </td>
              td.bordesabajo
                p.mb-0 Sedimentación de quebradas
            tr.fondo-10
              td.bordesabajo
                p.mb-0 Reducción de la capacidad hidráulica
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Consumo de materiales e insumos
              td.bordesabajo
                p.mb-0 Agotamiento de recursos naturales
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Emisión de ruido
              td.bordesabajo
                p.mb-0 Contaminación del aire por ruido
            tr.fondo-10
              td.bordes1.anchocol1
                p.mb-0 Intervención del suelo
              td.bordesabajo
                p.mb-0 Alteración de las propiedades fisicoquímicas del suelo.
    p.my-5(data-aos="fade-down-right") Partiendo de esta base de identificación de impactos, entraremos a realizar la valoración de estos.
    Separador
    #t_3_2.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.2 La valoración ambiental
    .row
      .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/fig3.svg")
      .col-lg-10.col-9
        .row 
          .col-lg-1.col-2.mb-4.mb-lg-0.me-0.pe-0.mt-2(data-aos="fade-down-right")
            img.me-0(src="@/assets/curso/tema2/flecha.svg")
          .col-lg-11.col-10.fondo-3.p-md-4.p-3.ms-0(data-aos="fade-down-left")  
            p.mb-0 Es el conjunto de elementos, características, procesos que dotan al medio ambiente de una serie de cualidades y méritos en los que se basa la necesidad de su conservación (Conesa, 1997).
          .col-lg-1.col-2.mb-4.mb-lg-0.me-0.pe-0.mt-4(data-aos="fade-down-right")
            img.me-0(src="@/assets/curso/tema2/flecha.svg")
          .col-lg-11.col-10.fondo-3.p-md-4.p-3.ms-0.mt-2(data-aos="fade-down-left")  
            p.mb-0 Esta valoración es el resultado del proceso de análisis y procesamiento de la información recolectada, por medio del cual se valora o cualifica la calidad de los componentes y factores del ambiente estudiado, permitiendo entonces sacar conclusiones sobre su importancia y apoyar de esta manera la toma de decisiones sobre las posibilidades de intervenirlo con el proyecto o de conservarlo en su estado actual.
    p.fondo-3.p-4.my-5(data-aos="fade-down-right") Para que visualice la información de los tipos de valor, tome cada imagen y colóquela en el cuadrante que corresponda, de esta manera completará el rompecabezas y sabrá de qué trata este ítem 
    Separador
    #t_3_3.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.3 Tipos de valor
    TabsA.color-acento-contenido.mb-5(data-aos="fade-down-right")

      .tarjeta.fondo-4.p-4(titulo="Productivo")
        .row.justify-content-around.align-items-center
          .col-xl-2.col-md-3.col-5.mb-4
            figure
              img(src='@/assets/curso/tema3/fig5.svg')
          .col-xl-9
            h4 Productivo 
            p El medio ambiente en general y cada sistema en particular produce bienes y servicios en mayor o menos medida, bien en forma de recursos accesibles (disponibles) o potenciales (no disponibles, con las técnicas actuales). Por lo tanto, este valor debe reflejar la capacidad productiva del ambiente.

      .tarjeta.fondo-4.p-4(titulo="Ecológico")
        .row.justify-content-around.align-items-center
          .col-xl-2.col-md-3.col-5.mb-4
            figure
              img(src='@/assets/curso/tema3/fig4.svg')
          .col-xl-9
            h4 Ecológico
            p Este valor estriba principalmente en su importancia e interés para la ciencia, la técnica y la cultura; por ser aprovisionadores de recursos o receptores de actividades; por la reserva genética depositada en ellos.

      .tarjeta.fondo-4.p-4(titulo="Paisajístico")
        .row.justify-content-around.align-items-center
          .col-xl-2.col-md-3.col-5.mb-4
            figure
              img(src='@/assets/curso/tema3/fig6.svg')
          .col-xl-9
            h4 Paisajístico
            p Se refiere a los valores perceptuales incluyendo consideraciones de orden estético. Denota la expresión de los valores estéticos, plásticos y emocionales del medio natural.
      
      .tarjeta.fondo-4.p-4(titulo="Sociocultural")
        .row.justify-content-around.align-items-center
          .col-xl-2.col-md-3.col-5.mb-4
            figure
              img(src='@/assets/curso/tema3/fig7.svg')
          .col-xl-9
            h4 Sociocultural
            p Estriba en la importancia e interés de las estructuras y condiciones sociales e histórico-culturales de las comunidades humanas o de la población de un área determinada.
    Separador
    #t_3_4.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.4 Criterios para la valoración ambiental
    p.mb-5(data-aos="fade-down-right") El valor ambiental de un factor es directamente proporcional al grado de caracterización cualitativa que producen las siguientes consideraciones, las cuales pueden tomarse como aspectos que posibilitan la determinación de la valoración ambiental (Conesa, 1997):
    .tarjeta.fondo-4.p-5.mb-5(data-aos="fade-down-right")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            p #[b Item 1 Extensión:] Refleja el área de influencia en relación con el entorno. A mayor extensión, mayor valor.
            p #[b Item 2 Complejidad:] Si el ambiente está compuesto por elementos diversos es más valioso que uno simple.
            p #[b Item 3 Rareza:] Califica lo frecuente o raro de un elemento del entorno.
            p #[b Item 4 Representatividad:] Determina el carácter simbólico del entrono (Incluye el carácter de endémico).
            p #[b Item 5 Naturalidad:] En cuanto más natural sea un ambiente es más valioso.
            p #[b Item 6 Abundancia:] Cuando está en gran cantidad en el entorno.
            p #[b Item 7 Diversidad:] Abundancia de elementos distintos en el entorno.
            p #[b Item 8 Estabilidad:] Permanencia en el entorno, firmeza.
            p #[b Item 9 Singularidad:] Valor adicional por la condición de distinto o distinguido.
            p #[b Item 10 Irreversibilidad:] Imposibilidad de que cualquier alteración sea asimilada por el medio debido a mecanismos de autodepuración.
        
          .col-md-6.col-8
            figure
              img(src='@/assets/curso/tema3/img4.png')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0
            p #[b Item 11 Fragilidad:] Vulnerabilidad y carácter perecedero de la cualidad del factor.
            p #[b Item 12 Continuidad:] Necesidad de conservación.
            p #[b Item 13 Insustitubilidad:] Imposibilidad de ser sustituido.
            p #[b Item 14 Clímax:] Proximidad al punto de más alto valor ambiental de un proceso.
            p #[b Item 15 Interés ecológico:] Por su peculiaridad ecológica.
            p #[b Item 16 Interés histórico-cultural:] Para las comunidades 
            p #[b Item 17 Interés individual:] Para las personas
            p #[b Item 18 Dificultad de conservación:] Dificultad es subsistencia en buen estado.
            p #[b Item 19 Significación:] Importancia para la zona del entorno.
          .col-md-6.col-8
            figure
              img(src='@/assets/curso/tema3/img5.png')
    Separador
    #t_3_5.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.5 La capacidad de acogida o sensibilidad ambiental
    p.mb-5(data-aos="fade-down-right") La capacidad de acogida es la aptitud que presenta un determinado territorio para recibir las consecuencias positivas y negativas que se pueden derivar de la construcción o el funcionamiento de un proyecto (Conesa, 1997). 
    .row.p-5.fondo-11.correr
      .col-12
        .row.justify-content-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
            img(src='@/assets/curso/tema3/img6.png')
          .col-lg-6.col-md-12(data-aos="fade-down-left")
            p.fondo-12.p-4.mb-0 Para su determinación se ha utilizado el concepto de la “sensibilidad ambiental” la cual se define como la mayor o menor capacidad de un sistema natural o social, para asimilar la acción de agentes externos sobre alguna de sus partes, sin que se produzcan cambios en la estructura o las propiedades de esas partes, de una magnitud tal que las alteren significativamente en comparación con su estado original. 
            p.mb-0.mt-4 Esta sensibilidad ambiental no puede entenderse si se piensa en el sistema como un todo, puesto que la acción de los agentes externos se realiza, necesariamente, sobre componentes específicos del sistema.
    p.my-5(data-aos="fade-down-right") Existen diferentes criterios para calificar la sensibilidad ambiental, sin embargo, puede partirse de una escala inversa de tres rangos, así:
    .row.justify-content-center
      .col-lg-7.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo-4")
          .row(titulo=" Sensibilidad ambiental alta")
            .col-md-5
            .col-md-7.mb-4.mb-md-0
              p Cuando el sistema tiene poca capacidad para asimilar los cambios introducidos en sus componentes por la acción de un proyecto o actividad, aún si esta acción tiene una magnitud menor.
          .row(titulo=" Sensibilidad ambiental media")
            .col-md-5
            .col-md-7.mb-4.mb-md-0
              p El sistema tiene una capacidad moderada para asimilar las acciones propuestas sobre sus componentes; puede decirse que las respuestas de esos componentes son proporcionales a la magnitud de la acción de tales proyectos.
          .row(titulo=" Sensibilidad ambiental baja")
            .col-md-5
            .col-md-7.mb-4.mb-md-0
              p Cuando la acción de un proyecto o actividad, aún si tiene una magnitud considerable, produce cambios menores en la estructura o propiedades del componente sobre el cual actúa.
      .col-lg-5.col-md-8(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/img7.jpg')
    p.my-4(data-aos="fade-down-right") Estas condiciones de acogida o sensibilidad se obtienen de los resultados de la evaluación ambiental, pero muchas veces también puede estar definida por los planes de ordenamiento territorial o las normas de usos del suelo.
    Separador
    #t_3_6.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.6 Características de los impactos
    .row.no-mostrarmenor1200
      .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/chico.svg")
      .col-lg-8.col-6
        .row 
          .col-lg-1.col-2.mb-4.mb-lg-0.me-0.pe-0.mt-2(data-aos="fade-down-right")
            img.me-0(src="@/assets/curso/tema3/flechazul.svg")
          .col-lg-9.col-10.fondo-4.p-md-4.p-3.ms-0(data-aos="fade-down-left")  
            p.mb-0 En respuesta a la forma como se ejecuta o realiza la acción que produce el impacto y de acuerdo con las condiciones del factor ambiental que está siendo afectado por dicha acción (línea base), se generan características especiales en los impactos, que le establecen atributos particulares a cada uno de ellos.
          .col-1
          .col-lg-2.col-1 
          .col-lg-9.col-7.fondo-3.p-md-4.p-3.me-0.mt-2(data-aos="fade-down-left")  
            p.mb-0 Identificar estas particularidades es la mayor dificultad en las evaluaciones y por eso la mayoría de los métodos de evaluación tratan de calificar algunos de estos atributos con el fin de determinar la significación o gravedad del impacto.
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
            p.mb-0 En respuesta a la forma como se ejecuta o realiza la acción que produce el impacto y de acuerdo con las condiciones del factor ambiental que está siendo afectado por dicha acción (línea base), se generan características especiales en los impactos, que le establecen atributos particulares a cada uno de ellos.
      .row.my-3
        .col-lg-9.col-7.fondo-3.p-md-4.p-3.me-0.mt-2(data-aos="fade-down-left")  
          p.mb-0 Identificar estas particularidades es la mayor dificultad en las evaluaciones y por eso la mayoría de los métodos de evaluación tratan de calificar algunos de estos atributos con el fin de determinar la significación o gravedad del impacto.
        .col-lg-1.col-2.mb-4.mb-lg-0.ms-0.ps-0.mt-3(data-aos="fade-down-right")
          img.ms-0.p-0.py-sm-4.pe-sm-3(src="@/assets/curso/tema3/flechaverde.svg")
        .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
          img(src="@/assets/curso/tema3/chica.svg")
    .row.no-mostrarmenor1200
      .col-1
      .col-lg-1.col-2(data-aos="fade-down-right")
        img.mb-0.p-0.px-sm-3(src="@/assets/curso/tema3/flechazularriba.svg")
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        p.p-4.fondo-4 En la siguiente tabla se presenta una lista de algunas de estas características, obtenida del libro de Vicente Conesa, (1997) Guía metodológica para la evaluación de impacto ambiental.
    .row.justify-content-center.my-5
      .col-lg-10.col-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        .tabla-c
          table
            tr.text-center.fondo-6.text-white
              td.anchocol
                h4.mb-0 CARACTERISTICAS
              td
                h4.mb-0 DEFINICIÓN 
            tr.fondo-10
              td.anchocol.bordes Clase:
              td.bordes
                p.mb-0 Se refiere al carácter beneficioso de las distintas acciones que van a actuar sobre los distintos factores considerados.
            tr.fondo-10
              td.anchocol.bordes Intensidad:
              td.bordes
                p.mb-0 Expresa “el grado de incidencia de la acción que produce el impacto sobre el factor ambiental considerado, en el ámbito especifico en el que actúa”: Es decir, indica la significancia del camabio producido por el proyecto sobre el factor ambiental que se está considerando.
            tr.fondo-10
              td.anchocol.bordes Extensión:
              td.bordes
                p.mb-0 Es el área de influencia teórica o territorio hasta donde se extienden las consecuencias del impacto. Puede ser puntual, local, regional, nacional o global.
            tr.fondo-10
              td.anchocol.bordes Momento:
              td.bordes
                p.mb-0 El momento o plazo de manifestación, se refiere al tiempo transcurrido entre la aparición o inicio de la acción que produce el impacto y el comienzo de las afectaciones sobre el factor considerado. Se evalúa en términos de tiempo y puede ser inmediato, a corto, mediano o largo plazo.
            tr.fondo-10
              td.anchocol.bordes Persistencia o duración:
              td.bordes
                p.mb-0 Se refiere al tiempo que supuestamente permanecerá el impacto desde cuando hace su aparición y hasta el momento a partir del cual el factor afectado retorna a las condiciones iniciales y previas, ya sea por medios naturales o mediante la introducción de medidas correctas. Se evalúa en términos de tiempo de duración (fugaz, temporal o permanente).
            tr.fondo-10
              td.anchocol.bordes Reversibilidad:
              td.bordes
                p.mb-0 Se refiere a la posibilidad de reconstrucción en forma natural del factor afectado como consecuencia de la acción acometida, es decir, la posibilidad de que éste retorne a las condiciones iniciales previas a la acción, por medios naturales, una vez aquel deje de actuar sobre me medio. Se evalúa en términos del tiempo que se demora la reconstrucción del factor.
            tr.fondo-10
              td.anchocol.bordes Recuperabilidad:
              td.bordes
                p.mb-0 Se refiere a la posibilidad de reconstrucción total o parcial, del factor afectado como consecuencia de la actividad acometida, es decir, la posibilidad de retornar a las condiciones iniciales previas a la acción, por medio de la intervención humana o sea mediante la implementación de medidas de manejo ambiental. Se evalúa en términos de la posibilidad de recuperación.
            tr.fondo-10
              td.anchocol.bordes Relación causa y efecto:
              td.bordes
                p.mb-0 Este atributo se refiere a la forma de manifestación del efecto sobre un factor, como consecuencia de una acción. Puede ser directo o primario, cuando éste se da en el mismo tiempo y lugar donde se presenta la acción, o indirecto o secundario, cuando la manifestación no es consecuencia directa de la acción, sino que se genera a partir de un efecto primario, actuando en otor tiempo y lugar.
            tr.fondo-10
              td.anchocol.bordes Iteracción de los efectos:
              td.bordes
                p.mb-0 Se refiere a la forma como se manifiestan las consecuencias del impacto. Puede ser de un modo simple o se cuándo se manifiesta sobre un solo componente ambiental sin inducir nuevos impactos; acumulativo cuando acumula o genera nuevas consecuencias o sinérgico cuando el resultado se acciones individúales menos actuando simultáneamente general una incidencia mayor.
            tr.fondo-10
              td.anchocol.bordes Periodicidad:
              td.bordes
                p.mb-0 Se refiere a la regularidad con que se manifiesta el impacto, ya sea cíclico, continuo o intermitente.
      .row.mb-3.justify-content-center(data-aos="fade-down-right")
        .col-lg-10.col-12.fondo-9.py-3
          p.fuente-14px.mb-0 Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades. Pág. 56 
    p(data-aos="fade-down-right") Partiendo de esta base de identificación de impactos, entraremos a realizar la valoración de estos.
    Separador
    #t_3_7.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.7 Gestión del riesgo
    figure.mb-5(data-aos="fade-down-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.my-5(data-aos="fade-down-right") Como lo ilustra la trayectoria de retroalimentación todo el proceso de gestión del riesgo es iterativo. El proceso se puede repetir muchas veces con criterios adicionales o modificados para la evaluación del riesgo que conducen a un proceso de mejora continua.
    .row.justify-content-center
      .col-lg-10.col-md-12.fondo-2.p-3.p-sm-4
        .row.justify-content-center
          .col-lg-6.col-md-8.col-sm-10.col-12
            img(src="@/assets/curso/tema3/fig8.svg")
    //-titulo fondo azul
    .row.my-5(data-aos="fade-down-right")
      .col-auto.fondo-6.redondear.px-4.py-3.text-white
        h3.mb-0.text-center Riesgo Ambiental
    p.mb-5(data-aos="fade-down-right") El riesgo ambiental se origina en la relación entre los seres humanos, sus actividades y el ambiente.

    .row.justify-content-center
      .col-lg-2.col-3.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema3/fig3.svg")
      .col-lg-1.col-2.mb-4.mb-lg-0.me-0.pe-0.mt-4(data-aos="fade-down-right")
        img.me-0.p-0.ps-sm-4(src="@/assets/curso/tema3/flechaverdeizq.svg")
      .col-lg-4.col-7.fondo-7.p-md-4.p-3.ms-0.mb-4.mb-lg-0.redondear(data-aos="fade-down-left")  
        p La gestión del riesgo ecológico, que trata sobre los riesgos asociados con las actividades humanas pasadas, presentes y futuras sobre la flora, la fauna y los ecosistemas, es un subconjunto de la gestión del riesgo ambiental.
        p Los riesgos ambientales se pueden agrupar en dos categorías: Riesgo para el ambiente, y Riesgo para una organización debido a temas relacionados con el ambiente. Revise la infografía para revisar la información al detalle. 
      .col-lg-5.col-8
        img(src="@/assets/curso/tema3/img8.jpg")
    //-titulo fondo azul
    .row.my-5(data-aos="fade-down-right")
      .col-auto.fondo-6.redondear.px-4.py-3.text-white
        h3.mb-0.text-center Riesgo para el ambiente
    p.mb-5(data-aos="fade-down-right") Este tipo de riesgo reconoce que las actividades de una organización pueden causar alguna forma de cambio ambiental. Los riesgos ambientales se pueden relacionar con la flora y la fauna; la salud y el bienestar humanos; la prosperidad cultural y social; los recursos terrestres, acuáticos y aéreos; la energía y el clima. Es necesario definir el alcance de cada estudio particular.
    //-titulo fondo azul
    .row.my-5(data-aos="fade-down-right")
      .col-auto.fondo-6.redondear.px-4.py-3.text-white
        h3.mb-0.text-center Riesgo para una organización debido a temas relacionados con el ambiente
    .row.justify-content-center(data-aos="fade-down-right")
      .col-12.fondo-4.p-4
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
            img(src="@/assets/curso/tema3/fig9.svg")
          .col-lg-9.col-12
            .row.align-items-center
              .col-lg-2.col-3
                img.px-sm-3.mt-0.pt-0(src="@/assets/curso/tema3/fig10.svg")
              .col-lg-10.col-9
                p Esto incluye el riesgo de no cumplir la legislación y criterios existentes (o futuros). Otros riesgos incluyen las pérdidas de negocios que puede sufrir una organización como resultado de una gestión pobre, como es el caso de pérdida de reputación, multas, costos de litigios y por no asegurar y mantener los permisos y licencias para el desarrollo y las actividades operativas.
            .row.align-items-center.mb-2
              .col-lg-2.col-3
                img.px-sm-3.mt-0.pt-0(src="@/assets/curso/tema3/fig11.svg")
              .col-lg-10.col-9
                p Los problemas de salud y seguridad y la gestión del riesgo para el manejo de emergencias pueden ser problemas significativos para el riesgo ambiental. Sin embargo, ya que otras guías abordan la orientación para estos problemas, y para evitar la duplicación, no se tratan en esta guía.
            .row.align-items-center
              .col-lg-2.col-3
                img.px-sm-3.mt-0.pt-0(src="@/assets/curso/tema3/fig12.svg")
              .col-lg-10.col-9
                p La gestión del riesgo ambiental proporciona un conjunto formal de procesos que ayuda en la toma de decisiones que afectan el ambiente y orienta a los encargados de tomar decisiones en lo relativo a tratar la incertidumbre.
    .row.mt-3.mb-5.justify-content-center
      .col-12.fondo-13.py-3
        p.fuente-14px.mb-0 ICONTEC. (2009) Guía técnica colombiana GTC 104 Gestión del riesgo Ambiental Principios y proceso. p.3-   
</template>

<script>
export default {
  name: 'Tema2',
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
