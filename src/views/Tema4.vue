<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Bases conceptuales sobre medidas de manejo ambiental
    img(src="@/assets/curso/tema5/img1.jpg")
    Separador
    #t_5_1.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 5.1 Plan de Manejo Ambiental 
    p Según el decreto 2041 de 2014 sobre Licencias Ambientales, define que el Plan de Manejo Ambiental “Es el conjunto detallado de actividades, que producto de una evaluación ambiental, están orientadas a prevenir, mitigar, corregir o compensar los impactos y efectos ambientales que se causen por el desarrollo de un proyecto, obra o actividad.  Incluye los planes de seguimiento, monitoreo, contingencia, y abandono según la naturaleza del proyecto, obra o actividad”.
    p De acuerdo con lo anterior, es importante destacar que la formulación del plan de manejo ambiental del proyecto, obra o actividad debe incluir tres aspectos:

    ImagenInfografica.color-secundario.my-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema5/img2.svg')
      .tarjeta.fondo-4.p-3(x="34%" y="51%" numero="1")
        p El plan de manejo de los impactos ambientales (PMI).  O sea, el conjunto de medidas que buscan prevenir o minimizar las consecuencias desfavorables del proyecto, de tal modo que se conserven, lo más fielmente posible, las condiciones ambientales iniciales o la situación previa sin proyecto.  Incluye también las acciones que se deben tomar para potencializar o maximizar los beneficios que puede generar el proyecto.

      .tarjeta.fondo-4.p-3(x="46%" y="27%" numero="2")
        p El plan de monitoreo y seguimiento ambiental del proyecto (PMS).    Es el plan de recolección sistemática de datos y de seguimiento ambiental del proyecto (vigilancia), que permite verificar las condiciones ambientales con proyecto y la efectividad de las medidas que se propusieron para el manejo de las consecuencias que este genera.

      .tarjeta.fondo-4.p-3(x="54%" y="49%" numero="3")
        p Plan de contingencias ambientales (PCT).   Es el conjunto de acciones que se deben implementar para el manejo de los riesgos ambientales que puede generar el proyecto.

    //-fuente pie de grafica
    .row.mb-4.justify-content-center.px-0(data-aos="fade-down-left")
      .col-12.fondo-13.mx-0.py-3
        p.fuente-14px.mb-0 Jorge A, Arboleda (2008) Manual de Evaluación de Impacto Ambiental de Proyectos, Obras o Actividades. p. 107
    Separador
    #t_5_2.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 5.2 Esquema conceptual de la formulación del PMA
    p.mb-5 Para la formulación del PMA, es necesario volver a utilizar toda la información recolectada, procesada o producida en los elementos anteriores de la EIA, es decir, se requiere la información sobre el proyecto, en especial la de las ASPI, la información sobre el ambiente que puede ser afectado, en especial de las FARI y la información sobre los impactos. Igualmente, en este proceso se produce información que se debe incorporar a los estudios técnicos y económicos del proyecto en su conjunto, tales como los costos, los programas de ejecución del PMA.
    .row
      .col-12.p-5.fondo-10
        img(src='@/assets/curso/tema5/img3.svg')
    //-fuente pie de grafica
    .row.mb-4.justify-content-center.px-0(data-aos="fade-down-left")
      .col-12.fondo-13.mx-0.py-3
        p.fuente-14px.mb-0 Jorge A, Arboleda (2008) Manual de Evaluación de Impacto Ambiental de Proyectos, Obras o Actividades. p. 108
    Separador
    #t_5_3.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 5.3 Tipos de medida según los objetivos que se persiguen:
    p.mb-5 De acuerdo con la finalidad o el objetivo que se desea alcanzar, las medidas se pueden clasificar de la siguiente manera:
    .tarjeta.fondo-4.p-3.p-sm-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0.pe-4
            h4 Medidas de prevención
            p Son acciones encaminadas a evitar los impactos y efectos negativos que pueda generar un proyecto, obra o actividad sobre el medio ambiente. Es decir, son aquellas medidas que buscan eliminar a priori las causas que pueden generar los impactos y, por lo tanto, hacen parte de la etapa de estudio y diseño del proyecto o antes de que se inicie la construcción.  
            p Por ejemplo, como medidas de prevención se pueden implementar cambios en el diseño del proyecto, en los procesos de construcción u operación, en las tecnologías utilizadas, en su localización, en el calendario de trabajo, etc., los cuales tienen que ser incorporados al proyecto antes de su construcción.

          .col-xl-6.col-lg-8.col-md-10.col-12.pe-xl-4
            figure
              img(src='@/assets/curso/tema5/img4.png')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0.pe-4
            h4 Medidas de mitigación
            p Son acciones dirigidas a minimizar los impactos y efectos negativos de un proyecto, obra o actividad sobre el medio ambiente, o sea la implementación de acciones para limitar o eliminar los posibles efectos adversos del proyecto. Para lograr esta reducción, se deben considerar todas las posibilidades técnicas, administrativas u operacionales que puede tener el proyecto.  Por ejemplo, para controlar la contaminación del agua por aguas residuales, se pueden utilizar sistemas de separación por gravedad o tratamientos biológicos o químicos, con lo cual se estaría reduciendo la cantidad de DBO que estaría llegando a los cuerpos de agua (magnitud) y por lo tanto minimizando la significancia del impacto ambiental (Con estas medidas se está actuando sobre el proyecto, sus tecnologías y procesos).
          .col-xl-6.col-lg-8.col-md-10.col-12.pe-xl-4
            figure
              img(src='@/assets/curso/tema5/img5.png')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0.pe-4
            h4 Medidas de corrección
            p Se dice que estas medidas son acciones dirigidas a recuperar, restaurar o reparar las condiciones del medio ambiente afectado por el proyecto, obra o actividad.   Es decir, son las medidas en las que se actúa directamente sobre el recurso afectado, tratando de restablecer las condiciones en las que se encontraba sin la presencia del proyecto. Por ejemplo, para controlar los efectos de las excavaciones sobre el suelo, se tienen que adelantar actividades de restauración o recuperación en el suelo directamente, tales como engramados, fertilizaciones, etc., (con estas medidas se está actuando sobre el recurso afectado).
        
          .col-xl-6.col-lg-8.col-md-10.col-12.pe-xl-4
            figure
              img(src='@/assets/curso/tema5/img6.png')
        .row.justify-content-center
          .col-xl-6.col-12.mb-4.mb-md-0.pe-4
            h4 Medidas de compensación
            p Son las obras o actividades dirigidas a resarcir y retribuir a las comunidades, las regiones, localidades y entorno natural por los impactos o efectos negativos generados por un proyecto, obra o actividad, que no puedan ser evitados, corregidos, mitigados o sustituidos.   Se denominan también medidas de reemplazo y su propósito es compensar a la comunidad o al estado por la pérdida de un recurso ambiental en un lugar determinado, con la conformación o creación de este mismo tipo de recurso en otro lugar (Weitzenfeld, 1996). También aplican para el manejo de los impactos residuales o sea aquellos que no se pueden manejar completamente. Pueden comprender el pago en dinero a la comunidad para compensar la pérdida de actividades productivas o la construcción de obras o actividades para resarcir por el daño de un determinado recurso.  Por ejemplo, la pérdida de vegetación por efecto de un embalse se tiene que compensar con la creación de una zona forestal de condiciones similares a la inundada en otra zona, ya que físicamente es imposible reemplazarla en el mismo embalse.
          .col-xl-6.col-lg-8.col-md-10.col-12.pe-xl-4
            figure
              img(src='@/assets/curso/tema5/img7.png')
    p.mb-5 Para comprender mejor en qué consisten las medidas de manejo y observar algunos ejemplos lo invito a consulte el siguiente material que se encuentra en material de apoyo.
    .row.justify-content-center.mb-4
      .col-lg-10.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        .tarjeta.fondo-5.px-3.py-2.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2
              img.p-4(src="@/assets/curso/tema3/fig1.svg")
            .col-lg-10.col-md-9.col-12
              .row.justify-content-between.align-items-center.mb-4.mb-lg-0
                .col.mb-3.mb-sm-0.text-white 
                  h3.mb-1 ¡Estimado Aprendiz!
                  p.text-small Manual de Evaluación de Impacto Ambiental de Proyectos, Obras o Actividades. Capítulo 5, pág. 113-120 Ejemplos de medidas típicas para el manejo de los impactos ambientales
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/embed/buPSHHPnPzk')" target="_blank")
                    span.text-dark Enlace <i>web</i>
                    i.fas.fa-play-circle
    Separador
    #t_5_4.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 5.4 Ejemplo de medidas de manejo ambiental.
    p.mb-5 Las medidas de manejo ambiental las define la empresa de acuerdo a sus impactos significativos o componentes afectados por esos impactos significativos ejemplo Plan de manejo ambiental de control de emisiones ( relaciona el impacto significativo) o Plan de manejo ambiental calidad del aire dirigido hacia el componente ambiental que esta vulnerado por el impacto), medidas por directrices de autoridades ambientales y si requiere cumplir términos de referencia o guías ambientales del sector para licencia ambiental.
    .row.justify-content-center.mb-5
      .col-lg-10.col-12.fondo-2
        .row.justify-content-center.align-items-center
          .col-lg-2.col-sm-3.col-4
            img.subir(src="@/assets/curso/tema3/fig3.svg")
          .col-lg-8.col-12.my-4.ps-5
            p.mb-0 Algunos de esos ejemplos son los mencionados por el libro de Arboleda.
            p.mb-0 Visualice las tablas Ejemplo de Medidas de manejo ambiental 
    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.1 Ejemplo de medidas de manejo de ingeniería o estructurales
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.anchocol.bordes
                p.mb-0 Componente
              td.text-white.fondo-6.anchocol.bordes
                p.mb-0 Impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              <td class="anchocol bordes fondo-18 text-center" rowspan="3">
                p Aire
              </td>
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Contaminación por particulas
              td.bordes.fondo-10
                p.mb-0 Instalación de ciclones, filtros, cámaras de sedimentación, separadores inerciales, precipitadores electrostáticos.
            tr
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Contaminación por ruido
              td.bordes.fondo-10
                p.mb-0 Instalación de mofles, barreras, cambios en el proceso.
            tr
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Contaminación por gases
              td.bordes.fondo-10
                p.mb-0 Construcción torres de lavado y absorbedores       
            tr.fondo-10
              <td class="anchocol bordes fondo-18 text-center" rowspan="5">
                p Agua
              </td>
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Contaminación por orgánicos
              td.bordes
                p.mb-0 Instalación de plantas de lodos activados, filtros rociadores lagunas de estabilización y de oxidación.
            tr
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Contaminación por grasas
              td.bordes.fondo-10
                p.mb-0 Construcción de trampas de grasas.
            tr
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Contaminación por sólidos
              td.bordes.fondo-10
                p.mb-0 Instalación de sistemas de filtración (gravedad, flujo ascendente) o tanques sedimentadores.
            tr
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Contaminación por inorgánicos
              td.bordes.fondo-10
                p.mb-0 Instalación de sistemas de absorción.
            tr
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Incremento de temperatura
              td.bordes.fondo-10
                p.mb-0 Construcción de torres o lagunas de efriamiento.
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center Suelo
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Incremento erosión
              td.bordes
                p.mb-0 Protección de los taludes (terrazas, cubierta vegetal)
            tr.fondo-10
              td.anchocol.bordes.fondo-18.text-center Fauna
              td.bordes.fondo-18.text-center.anchocol
                p.mb-0 Pérdida rutas de migración
              td.bordes
                p.mb-0 Construcción de escaleras para peces en represas o pasajes bajo carreteras.

        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Fuente: Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.p.112
    p En las tablas siguientes se presentan unos listados genéricos de medidas para el manejo de algunos impactos ambientales, las cuales se realizan por componentes ambientales afectados, las cuales son las más comunes de usar.
    p.mb-5 El tipo de medidas que pueden ser aplicadas para el manejo de los impactos ambientales de un determinado proyecto.
    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.1 Ejemplo de medidas de manejo de ingeniería o estructurales
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.anchocol.bordes
                p.mb-0 Componente
              td.text-white.fondo-6.bordes.anchocol4
                p.mb-0 Impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              td.bordes.text-center.anchocol
                p.mb-0 Aire
              td.bordes.anchocol4
                p.mb-0 Incremento de contaminantes durante inversiones atmosféricas
              td.bordes
                p.mb-0 Paro de la planta durante las incersiones
            tr.fondo-10
              td.bordes.text-center.anchocol
                p.mb-0 Agua
              td.bordes.anchocol4
                p.mb-0 Decremento del oxigeno disuelto durante sequías
              td.bordes
                p.mb-0 Regulación de la descarga de desechos en estas épocas.
            tr.fondo-10
              td.bordes.text-center.anchocol
                p.mb-0 Suelo
              td.bordes.anchocol4
                p.mb-0 Incremento de la erosión por prácticas agrícolas
              td.bordes
                p.mb-0 Rotación en le uso del suelo para mantener la cobertura vegetal.  
            tr.fondo-10
              td.bordes.text-center.anchocol
                p.mb-0 Fauna
              td.bordes.anchocol4
                p.mb-0 Separación entre el hábitat de una especie y su área de apareamiento
              td.bordes
                p.mb-0 Cerrado de carretes durante la temporada de apareamiento.
            tr.fondo-10
              <td class="bordes text-center anchocol" rowspan="2">
                p.mb-0 Social
              </td>
              td.bordes.anchocol4
                p.mb-0 Sobrecarga en los servicios públicos y de salud por los trabajadores.
              td.bordes
                p.mb-0 Ampliar capacidad de atención de servicios.
            tr.fondo-10
              td.bordes.anchocol4
                p.mb-0 Pérdida actividad productiva en la población afectada.
              td.bordes
                p.mb-0 Emplear a personas afectadas en labores del proyecto o recomposición de base económica
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Fuente: Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.p.112

    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.3 Ejemplo de medidas de manejo de tipo administrativo o contractual
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.bordes.anchocol5
                p.mb-0 Impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Deterioro de la calidad del agua por aceites y lubricantes.
              td.bordes
                p.mb-0 Prohibir lavar la maquina y equipos sobre las corrientes de agua.
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Deterioro de la fauna por actividades de caza y pesca
              td.bordes
                p.mb-0 Prohibir a los trabajadores la caza y la pesca por métodos qu e le ocasionen daños (armas de fuego, venenos,etc.
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Deterioro de la vegetación por incendios.
              td.bordes
                p.mb-0 Prohibir las fogatas y cocinar con leña.
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Deterioro de la calidad del aire por quemas agrícolas.
              td.bordes
                p.mb-0 Reglamentar la utilización de esta práctica agrícola (épocas, condiciones, frecuencia, etc.)
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Incremento riesgos de accidentalidad por aumento de tráfico.
              td.bordes
                p.mb-0 Reglamentar las actividades que ocasionen el ruido ( restricción de niveles de ruido, de horarios, etc.)
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.p.113
    p En las tablas siguientes se presentan unos listados genéricos de medidas para el manejo de algunos impactos ambientales, las cuales se realizan por componentes ambientales afectados, las cuales son las más comunes de usar.
    p.mb-5 El tipo de medidas que pueden ser aplicadas para el manejo de los impactos ambientales de un determinado proyecto. 
    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.4 Medidas genéricas para el manejo de los impactos sobre el agua
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.bordes.anchocol5
                p.mb-0 Tipo de impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-4 Relacionados con procesos contaminantes (Sólidos, material particulado, grasas, aceites, lubricantes, materia orgánica), que implican:
                p.ms-5.mb-0 Deterioro de la calidad
                p.ms-5.mb-0 Interferencia o limitación con usos del agua
                p.ms-5.mb-0 Eutroficación
                p.ms-5.mb-0 Olores indispensables
                p.ms-5.mb-0 Disminución de la transparencia
                p.ms-5.mb-0 Efectos antiestéticos
              td.bordes
                h5.mb-4 Preventivas:
                p.ms-5.mb-0 Planificación correcta de las alternativas
                p.ms-5.mb-0 Disminución de la generación del agua residual
                p.ms-5.mb-0 Recuperación de subproductos
                p.ms-5.mb-0 Separación de vertidos en la fuente
                p.ms-5.mb-4 Recirculación de aguas usadas
                h5.mb-4 Correctivas:
                p.ms-5.mb-0 Recolección de grasas, aceites y otros contaminantes.
                p.ms-5.mb-0 Obras de colección de aguas lluvia (cunetas, zanjas, alcantarillas).
                p.ms-5.mb-0 Obras de colección de cauces (muros, trinchos, etc.).
                p.ms-5.mb-0 Tratamientos primarios: Separación de sólidos en suspensión (floculadores, sedimentadores), ajuste de pH.
                p.ms-5.mb-0 Tratamiento secundario: Lagunas de aireación, biodiscos, balsas de estabilización.
                p.ms-5.mb-0 Tratamiento químico dirigido a la eliminación de bacterias y virus patógenos mediante cloración, ozonización, irradiación.
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Depósitos de sedimentación o colmatación de cauces y depósitos de agua.
              td.bordes
                p.mb-0 Control de erosión: Manejo del agua (rondas, canales, zanjas, cunetas, etc.); aterrazamiento de taludes, laderas o cárcavas; protección de orillas (enrocados, enllantamientos, etc.); cubrimiento áreas expuestas ( revegetación); lagunas de sedimentación.
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Reducción de la cantidad o disponibilidad de agua superficial.
                p.mb-0 Interferencia con usos del agua.
              td.bordes
                p.mb-0 Recirculación del agua
                p.mb-0 Revestimiento de túneles
                p.mb-0 Impermeabilización de conducciones o canales, etc.
                p.mb-0 Construcción de nuevos sistemas de acueducto
                p.mb-0 Construcción de tanques y sedimentadores.
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.p.113

    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.5 de Medidas genéricas para el ,anejo de los impactos sobre el aire
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.bordes.anchocol5
                p.mb-0 Tipo de impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              <td class="bordes anchocol5 cambiar-alineacion" rowspan="2">
                p.mb-4 #[b Relacionados con procesos contaminantes] (Material particulado, gases), que impliquen: Deterioro de la calidad del aire.
                p.ms-5.mb-0 Deterioro de la salud
                p.ms-5.mb-0 Deterioro de la prioridad y los materiales (devaluación, abrasión, decoloramiento, derrumbamiento, etc.)
                p.ms-5.mb-0 Reducción de la visibilidad
                p.ms-5.mb-0 Molestias a la comunidad
                p.ms-5.mb-0 Cambios en las condiciones climáticas (lluvia ácida, efecto invernadero, etc.)
              </td>
              td.bordes
                h5 Preventivas:
                p.ms-5.mb-0 Utilización de tecnología de baja o nula emisión de residuos.
                p.ms-5.mb-0 Planificación correcta de las alternativas, para seleccionar aquella con mejor capacidad e acogida.
                p.ms-5.mb-0 Utilización de materias primas no contaminantes.
                p.ms-5.mb-0 Limitar las prácticas de quemas a cielo abierto.
            tr.fondo-10
              td.bordes.anchocol5
                h5 Correctivas:
                p.ms-5.mb-0 Concentración o retención de contaminantes con equipos adecuados 
                p.ms-5.mb-0 #[b partículas:] Instalación de ciclones, lavadores, filtros de tela, cámaras de sedimentación, separadores inerciales, precipitadores electrostáticos.
                p.ms-5.mb-0 #[b Compuestos orgánicos gaseosos:] Instalación equipos de adsorción sobre carbón o la combustión (Incineración).
                p.ms-5.mb-0 #[b Polvo:] Riego de agua (control del 50%) o riego con compuestos químicos (70% de control pero es mucho más costoso)
                p.ms-5.mb-0 Construcción de pantallas o barreras
                p.ms-5.mb-0 Revegetación

            tr.fondo-10
              td.bordes.anchocol5
                p.mb-4 #[b Ruido]
                p.ms-5.mb-0 Daños a la salud humana
                p.ms-5.mb-0 Desplazamiento o muerte de fauna
                p.ms-5.mb-0 Deterioro de los materiales y la infraestructura
                p.ms-5.mb-0 Perturbación de actividades humanas.
              td.bordes.cambiar-alineacion
                p.mb-0 #[b Preventivas:] Diseño de la obra
                p.mb-0 #[b En la fuente:] Instalación de mofles, silenciadores, cambios en equipos, limitaciones a la velocidad de los equipos, etc.
                p.mb-0 #[b En el receptor:] Construcción de pantallas sónicas, diseños antirruidos. etc.
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.p.114

    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.6 Medidas genéricas para el manejo de los impactos sobre el suelo
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.bordes.anchocol5
                p.mb-0 Tipo de impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-0 Relacionados con procesos contaminantes (por solidos, aceites, lubricantes, etc.)
                p.mb-0 Deterioro del suelo
                p.mb-0 Pérdida de suelos
                p.mb-0 Disminución del valor del suelo
                p.mb-0 Pérdida o deterioro de propiedades físico-químicas (compactación, salinización, envenenamiento)
              td.bordes.cambiar-alineacion
                p.mb-0 Medidas de contención o aislamiento
                p.mb-0 Aislamiento: Instalación de barreras superficiales o subterráneas
                p.mb-0 Recogida y control de lixiviados
                p.mb-0 Recogida y control de los contaminantes: Bombeos, materiales absorbentes, etc.
                p.mb-0 Biodegradación ( Transformación de las sustancias contaminantes)
                p.mb-0 Vitrificación
                p.mb-0 Degradación del suelo
                p.mb-0 Aireación del suelo
                p.mb-0 Medidas de tratamiento ex situ
                p.mb-0 Similares a los tratamientos in situ pero transportando el suelo a otra parte
            tr.fondo-10
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-0 Inestabilidad de laderas, taludes y vertientes.
                p.mb-0 Erosión laminar
                p.mb-0 Erosión por el agua
                p.mb-0 Erosión eólica
              td.bordes.cambiar-alineacion
                p.mb-0 Manejo de agua: rondas, cunetas, zanjas, acequias, canales, etc.
                p.mb-0 Aterrizamiento o banqueos.
                p.mb-0 Protección de orillas: enrocados, enllantamientos, muros, gaviones, etc.
                p.mb-0 Cubrimiento de áreas expuestas: Revegetación, hidrosiembra, telas biodegradables, etc.
                p.mb-0 Métodos alternativos de siembra: en fajas, rotación de cultivos, etc.
            tr.fondo-10
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-0 Decremento de la producción agrícola
              td.bordes
                p.mb-0 Mejora de la textura y la estructura: Remoción elementos gruesos, trabajos mecánicos.
                p.mb-0 Mejoramiento de suelos con aplicación de fertiliazantes, enmiendas, encalados, etc.
            tr.fondo-10
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-0 Salinización
              td.bordes
                p.mb-0 Practicas de desalinización con riegos y drenajes
                p.mb-0 Aplicación de yeso
            tr.fondo-10
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-0 Perdida de suelo vegetal
              td.bordes
                p.mb-0 Medidas de control de erosión
                p.mb-0 Recuperación del manto vegetal
                p.mb-0 Repoblación forestal
            tr.fondo-10
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-0 Riesgo de inundaciones
              td.bordes
                p.mb-0 Prácticas de drenaje
                p.mb-0 Prevención de inundaciones
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Compactación del suelo
              td.bordes
                p.mb-0 Rotura o escarificación 
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.p.114

    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.7 Medidas genéricas para el manejo de los impactos sobre la vegetación
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.bordes.anchocol5
                p.mb-0 Impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Relacionados con procesos contaminantes (Material particulado, gases), que impliquen: Deterioro de la vegetación, etc.
              td.bordes
                p.mb-0 Ver medidas de manejo para contaminación de Agua, Aire y Suelo.
                p.mb-0 Uso racional de plaguicidas y fertilizantes.
            tr.fondo-10
              <td class="bordes anchocol5" rowspan="2">
                p.mb-4 Relacionados con otros procesos o acciones de los proyectos que impliquen:
                p.mb-0 Eliminación, reducción o modificación de la cobertura vegetal.
                p.mb-0 Perdida de la productividad de la coberturas vegetales.
                p.mb-0 Disminución de la calidad visual y paisajística.
                p.mb-0 Pérdida o disminución del potencial recreativo.
                p.mb-0 Pérdida o disminución del potencial científico, cultural y educativo.
              </td>
              td.bordes
                h5.mb-0 #[b Preventivas:]
                p.mb-0.ms-5 Planificación de zonas a remover
                p.mb-0.ms-5 Rediseño del proyecto
            tr.fondo-10
              td.bordes.anchocol5
                h5.mb-0 #[b  Correctivas:]
                p.mb-0.ms-5 Recuperación o establecimiento de nuevas zonas de vegetación natural (reforestación, enriquecimiento florístico)
                p.mb-0.ms-5 Establecimiento de nuevas zonas agropecuarias.
                p.mb-0.ms-5 Implementación de métodos de ordenación y aprovechamiento racional de las coberturas vegetales.
                p.mb-0.ms-5 Protección contra incendios
                p.mb-0.ms-5 Vigilancia y control de zonas boscosas.
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.p.115 

    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.8 Medidas genéricas para el manejo de los impactos sobre la fauna
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.bordes.anchocol5
                p.mb-0 Impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-4 Relacionados con procesos contaminantes que impliquen: 
                p.mb-0.ms-5 Deterioro de la fauna y los ecosistemas
                p.mb-0.ms-5 Eliminación, reducción o modificación de la fauna, etc.
              td.bordes.cambiar-alineacion
                p.mb-0 Ver medidas de manejo para contaminación de Agua, Aire y Suelo.
                p.mb-0 Uso racional de plaguicidas y fertilizantes.
            tr.fondo-10
              <td class="bordes anchocol5" rowspan="2">
                p.mb-4 Relacionados con procesos o acciones de los proyectos que impliquen:
                p.mb-0.ms-5 Eliminación, reducción o modificación de la fauna.
                p.mb-0.ms-5 Pérdida de valores naturales y del patrimonio faunístico.
                p.mb-0.ms-5 Desequilibrio en los ecosistemas
                p.mb-0.ms-5 Pérdida de valores estético culturales
                p.mb-0.ms-5 Perdida de productividad
                p.mb-0.ms-5 Alteración procesos ecológicos
              </td>
              td.bordes
                h5.mb-0 #[b Preventivas:]
                p.mb-0.ms-5 Diseño adecuado que reduzca las afectaciones (efecto barrera)
                p.mb-0.ms-5 Señalización
                p.mb-0.ms-5 Campañas educativas.
            tr.fondo-10
              td.bordes.anchocol5
                h5.mb-0 #[b Correctivas:]
                p.mb-0.ms-5 Establecimiento o restitución de zonas boscosas
                p.mb-0.ms-5 Creación de zonas especiales para preservación de la fauna
                p.mb-0.ms-5 Campañas de vigilancia y control
                p.mb-0.ms-5 Protección contra incendios
                p.mb-0.ms-5 Planes racionales de caza y pesca
                p.mb-0.ms-5 Rescate faunístico
            tr.fondo-10
              td.bordes.anchocol5
                p.mb-0 Dificultades a la movilización por carreteras, embalses, etc.
              td.bordes
                p.mb-0 Limitaciones de la velocidad
                p.mb-0 Establecimiento de pasos para la fauna (escaleras en represas, pasajes bajo carreteras)
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades
    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.9 Medidas genéricas para el manejo de los impactos sobre el paisaje
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.bordes.anchocol5
                p.mb-0 Tipo de impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              <td class="bordes anchocol5" rowspan="2">
                p.mb-4 Relacionados con acciones del proyecto que afectan la topografía y el suelo (movimientos de tierra, cambios usos del suelo, construcciones, etc.) que produzcan:
                p.mb-0.ms-5 Deterioro del paisaje
                p.mb-0.ms-5 Interrupción del espacio
                p.mb-0.ms-5 Disparidad en los elementos del paisaje
                p.mb-0.ms-5 Disminución en la apariencia del agua, el aire, la vegetación, etc.
              </td>
              td.bordes.cambiar-alineacion
                h5.mb-0 Preventivas:
                p.mb-0.ms-5 Adaptación del proyecto a las formas del medio
                p.mb-0.ms-5 Diseño estructural que provoque el mínimo corte visual
            tr.fondo-10
              td.bordes.anchocol5
                h5.mb-0 Correctivas:
                p.mb-0.ms-5 Conformación de las zonas expuestas: taludes tendidos de superficie ondulada y rugosa
                p.mb-0.ms-5 Revegetalizacion de zonas expuestas con vegetación con formas parecidas a las existentes.
                p.mb-0.ms-5 Creación de áreas ajardinadas o paisajística
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.115.

    //- tabla C
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        h5.mb-3 Tabla 5.10 Medidas genéricas para el manejo de los impactos sobre el medio social
        .tabla-c
          table
            tr.text-center
              td.text-white.fondo-6.bordes.anchocol
                p.mb-0 Dimensión
              td.text-white.fondo-6.bordes.anchocol5
                p.mb-0 Tipo de impacto
              td.text-white.fondo-6.bordes
                p.mb-0 Medida de manejo
            tr.fondo-10
              td.bordes.anchocol.cambiar-alineacion
                p.mb-0 Cultura
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-3.text-bold Relacionados con el patrimonio histórico, arqueológico, etc...
                p.mb-0.ms-5 Destrucción o desmejoramieto del patrimonio cultural, arquitectónico, etc.
                p.mb-3.ms-5 Modificación de las actividades o alteraciones de las áreas de especial interés.
                p.mb-3.text-bold Relacionados con la identidad o la forma como los individuos se perciben a si mismos y se diferencian de otros.
                p.mb-0.ms-5 Cambio de actitud y estilo de vida
                p.mb-0.ms-5 Ruptura de las condiciones de cohesión de las comunidades.
              td.bordes.cambiar-alineacion
                p.mb-0 Proyectos de información, consulta y concentración sobre la obra y el plan de manejo.
                p.mb-0 Reconstrucción, traslado o rehabilitación de elementos históricos, arqueológicos o culturales (Rescate arqueológico)
                p.mb-0 Campañas educativas para motivar al arraigo y la conservación de la identidad.
                p.mb-0 Programas para evitar el contacto residente-extraño.
            tr.fondo-10
              td.bordes.anchocol.cambiar-alineacion
                p.mb-0 Política
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-3.text-bold Relacionados con las relaciones de poder o la capacidad de decisión de la comunidad.
                p.mb-0.ms-5 Conflictos entre la población residente y la inmigrante.
                p.mb-0.ms-5 Aparición o agravamiento de la corrupción institucional
                p.mb-0.ms-5 Aumento de la presión comunitaria o política hacia el proyecto para la solución de problemas ajenos al mismo
                p.mb-3.ms-5 Agravamiento de la baja participación comunitaria y política debido al aumento de escenarios que exigen esta participación
                p.mb-3.text-bold Relacionados con las expectativas de la comunidad por la presencia de los proyectos
                p.mb-0.ms-5 Generación de falsas expectativas
                p.mb-0.ms-5 Generación de problemas de ansiedad en la población
                p.mb-0.ms-5 Aprovechamiento de los "vivos" y oportunistas.
              td.bordes.cambiar-alineacion
                p.mb-0 Proyectos de información, consulta y concertación sobre la obra y el plan de manejo
                p.mb-0 campañas educativas a autoridades municipales, juntas de acción comunal.
                p.mb-0 Campañas de divulgación y explicación del proyecto.
                p.mb-0 Implementación de mecanismos de participación ciudadana.
                p.mb-0 Proyecto de fortalecimiento y apoyo institucional
                p.mb-0 Proyecto de atención de reclamos.
            tr.fondo-10
              td.bordes.anchocol.cambiar-alineacion
                p.mb-0 Demográfica
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-3.text-bold Relacionados con la población:
                p.mb-0.ms-5 Desplazamiento de población
                p.mb-0.ms-5 Inmigración de nuevas personas a la zona del proyecto
                p.mb-0.ms-5 Crecimiento o decrecimiento de las condiciones migratorias.
                p.mb-0.ms-5 Modificaciones en las distribuciones poblacionales
                p.mb-3.ms-5 Modificaciones en los patrones de asentamiento
                p.mb-3.text-bold Relacionados con la salud
                p.mb-0.ms-5 Generación de nuevas enfermedades
                p.mb-0.ms-5 Problemas de contaminación del agua y el aire
                p.mb-0.ms-5 Incremento riesgos de accidentalidad en la población
                p.mb-3.ms-5 Cambios en la demanda de servicios sociales y de salud
                p.mb-3.text-bold Relacionados con la calidad de vida de la población:
                p.mb-0.ms-5 Perdida de espacios recreativos, de esparcimiento, religiosos, etc.
                p.mb-0.ms-5 Pérdida de empleo
                p.mb-0.ms-5 Cambios en los tipos de vivienda y en los niveles de ocupación de las mismas
                p.mb-0.ms-5 Alteraciones en los recursos educativos
                p.mb-0.ms-5 Alteraciones en la calidad y la demanda de servicios de transporte
                p.mb-0.ms-5 Alteraciones en los patrones y características religiosas
                p.mb-0.ms-5 Incremento de problemas de alcoholismo, drogadicción, tabaquismo, prostitución y mendicidad.
              td.bordes.cambiar-alineacion
                p.mb-0 Proyectos de información, consulta y concertación sobre la obra y el plan de manejo
                p.mb-0 Rease4ntamiento o indemnizaciones
                p.mb-0 Restitución, mejora o construcción de infraestructura recreativa, de uso del tiempo libre, hospitalaria, educacional, etc.
                p.mb-0 Campañas de salud y educación
                p.mb-0 Proyecto de adquisición de tierras
                p.mb-0 Proyecto de control de áreas adquiridas
                p.mb-0 Proyecto de escrituración y legalización de inmuebles
                p.mb-0 Proyecto de asesoramiento en la adquisición de inmuebles
                p.mb-0 Proyecto de mejoramiento de servicio de transporte
                p.mb-0 Proyecto de uso adecuado y mantenimiento de infraestructura construida.
            tr.fondo-10
              td.bordes.anchocol.cambiar-alineacion
                p.mb-0 Económica
              td.bordes.anchocol5.cambiar-alineacion
                p.mb-3.text-bold Relacionados con las actividades económicas (consumo, producción, distribución de la renta, ingresos)
                p.mb-0.ms-5 Crecimiento o devrecimiento de actividades y patrones económicos
                p.mb-0.ms-5 Crecimiento y decrecimiento en los niveles de ingreso
                p.mb-0.ms-5 Alteraciones en los niveles impositivos provocados por las alteraciones en la utilización del suelo y en los niveles de ingresos
                p.mb-3.text-bold Relacionados con el empleo
                p.mb-0.ms-5 Crecimiento y decrecimiento de los niveles de empleo y desempleo
                p.mb-0.ms-5 Alteraciones en la distribución laboral
              td.bordes.cambiar-alineacion
                p.mb-0 Proyectos de información, consulta y concentración sobre la obra y el plan de manejo
                p.mb-0 Creación, restitución o mejoramiento de canales de comercialización e infraestructura y actividades productivas
                p.mb-0 Mecanismos de contratación de mano de obra
                p.mb-0 Campañas educativas
                p.mb-0 Proyectos productivos de subsistencia
                p.mb-0 Proyecto de control de costos de la vida
                p.mb-0 Proyecto de control de costo de la vida
                p.mb-0 Proyecto de capacitación de nuevas oportunidades
                p.mb-0 Proyecto de reincorporación económica
                p.mb-0 Proyecto de consolidación y autogestión de proyectos económicos.
        .row.mt-3.mb-4.justify-content-center(data-aos="fade-down-left")
          .col-12.fondo-13.py-3
            p.fuente-14px.mb-0 Jorge A, Arboleda (2008). Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades.p.116-117.
    Separador
    #t_5_5.tarjetas.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 5.5 Procedimiento para la selección de las medidas de manejo.
    p No existe un procedimiento universal para la formulación de un plan de manejo de los impactos ambientales, por lo que este trabajo se apoya más en la experiencia y conocimiento de las personas que participan en la EIA. A continuación, se expone un proceso lógico que apunta en este sentido. 
    p.mb-5 Tome la flecha y de clic al blanco para que visualice la información:
    .row.justify-content-center.mb-5
      .col-12.fondo-14
        .row.justify-content-center.align-items-center
          .col-xl-2.col-sm-3.col-4
            img.subir(src="@/assets/curso/tema5/chicoderecha.svg")
          .col-xl-10.col-12.my-4.ps-5
            p.text-bold.mb-2 Paso 1. Análisis de los impactos y las relaciones causa-efecto. 
            p.mb-0 El primer paso para poder identificar las medidas de manejo es conocer muy bien todo lo relacionado con el impacto, tal como la acción que lo origina, las consecuencias que genera, su área de influencia, los atributos con los cuales se presenta (magnitud, periodicidad, velocidad, duración, etc.). Igualmente es necesario conocer muy bien los factores ambientales que están siendo afectados, por dicho impacto: Sus condiciones iniciales (sin proyecto), sus probables condiciones finales (con proyecto), su susceptibilidad al cambio, su importancia (ecológica, económica, cultural, etc.), etc. 
    .row
      .col-12.fondo-7.p-5
        p.text-bold.mb-2 Paso 2. Análisis del marco normativo y empresarial.
        p Cuando se tenga un conocimiento detallado del impacto y del ambiente que va a ser afectado, se deben analizar las normas de tipo legal que se aplican al proyecto y a los impactos que se generan (emisiones, vertimientos, consumos, etc.), 
        p.mb-0 Las exigencias de la autoridad ambiental (contenida en los términos de referencia, en resoluciones, etc.), las exigencias de tipo sectorial, las obligaciones empresariales establecidas en políticas o normas internas o en convenios que la empresa haya firmado, etc.
    .row.justify-content-center.my-5
      .col-lg-7.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        p En el caso de que la empresa disponga de un Sistema de Gestión Ambiental, también se deben revisar las exigencias de la norma bajo la cual se tiene montado el sistema (ISO 14.000 u otro). 
        p Todo este marco determina las orientaciones del PMA y el alcance de las medidas que se deben formular, porque se tienen que cumplir todas estas ellas. “Para definir hasta dónde mitigar/compensar se puede usar como ejemplo el tema de la contaminación.
        p En primer lugar, se utilizan las normas de calidad ambiental; en ausencia de normas nacionales, existen las internacionales para usarlas como referencia. 
        p En segundo lugar, puede usarse el conjunto de criterios y principios de política ambiental, explícitos en la legislación o implícitos en un enfoque de gestión, sobre todo aquellos que regulan distintas variables del ambiente. 
        p En tercer lugar y en ausencia de los instrumentos anteriores, en los términos de referencia para un estudio de impacto ambiental pueden quedar establecidas las exigencias respectivas.” (Espinoza, 2002). 
      .col-lg-5.col-md-6.col-sm-8.col-10(data-aos="fade-down-left")
        img(src="@/assets/curso/tema5/img8.jpg")
    .row.my-5
      .col-12.fondo-19.p-5
        p.text-bold.mb-2 Paso 3. Identificación de las acciones o medidas generales que pueden manejar el impacto. 
        p El siguiente paso consiste en empezar a analizar y a definir las medidas que pueden manejar el impacto analizado, de acuerdo con todo el abanico de posibilidades que se planteó anteriormente. En la selección de la medida se debe tener en cuenta lo siguiente: 1. Comprobar si es posible implementar algún cambio en el proyecto para eliminar el impacto (este chequeo debe hacerse teniendo en cuenta consideraciones de tipo técnico y económico). 2. Si no se puede prevenir el impacto, proponer una medida de mitigación o corrección dependiendo del tipo de impacto, hasta llevarlo a un nivel de significancia aceptable. 3. Si no es posible prevenir el impacto y tampoco atenuarlo, entonces se propone una medida de compensación. Inicialmente, se debe hacer un planteamiento general de la medida, indicando claramente el impacto que va a manejar e identificando sus aspectos generales, ya que el diseño definitivo se hará posteriormente en el paso 5.
    p.text-bold.mb-2 Paso 4. Agrupación de las medidas de manejo generales propuestas. 
    p Algunas medidas de manejo tienen características similares, ya sea porque sirven de solución a impactos similares, atienden impactos sobre un mismo componente o factor ambiental o tienen tantas cosas en común que se pueden atender por medio de una misma medida. En este caso y con el propósito de optimizar los recursos y aprovechar las sinergias entre diferentes acciones, se recomienda agrupar estas medidas en una sola.
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema5/img9.jpg")
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        p.fondo-2.p-4 Por ejemplo, se puede tener una medida para el control de la erosión que implique el uso de coberturas vegetales (engramados, reforestación, etc.), otra medida para tratamiento paisajístico que requiere también la utilización de vegetación y una medida de compensación para reponer un área determinada de vegetación destruida. 
        p Estas tres medidas que implican la producción, uso y trabajos con material vegetal, se podrían agrupar en una sola que se llame, por ejemplo: Proyecto de tratamientos con vegetación y que incluya todas las actividades necesarias para atender todos los impactos donde se necesite el uso, manejo y tratamiento con vegetación. La idea es entonces revisar todas las medidas propuestas en el paso 3, para buscar cuales son comunes o tienen sinergias con otras y determinar los que se pueden agrupar y convertirlas en medidas que se puedan trabajar juntas. 
    p.text-bold.mb-2.mt-5 Paso 5. Diseño de la medida o proyecto propuesto. 
    p El siguiente paso, luego de que se tengan agregadas las medidas de manejo, es realizar el diseño de esta, de tal forma que pueda ser llevada a construcción o implementación por el constructor o el operador del proyecto y que se puedan estimar los costos requeridos para llevarla a cabo con un grado aceptable de confiabilidad. Esta formulación detallada debe contener como mínimo, lo siguiente:
    .row
      .col-12.pt-4.ps-md-0.pb-0.fondo-19
        .row.justify-content-center.align-items-center
          .col-md-3.col-5.mb-md-0.mb-4
            img(src="@/assets/curso/tema5/chicaderecha.svg")
          .col-md-9.col-12
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Objetivos de la medida. (incluyendo los impactos que va a manejar y los factores ambientales afectados) 
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Meta a alcanzar con la medida, es decir los logros o resultados que se espera lograr. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Descripción detallada de la acción propuesta. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Planos de localización y las obras que comprende.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Criterios de diseño utilizados. 
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Efectos negativos que se pueden desprender de la medida. (si los hay) 
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Necesidades de mantenimiento. 
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Indicadores de seguimiento y monitoreo de la medida. 
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Organización y personal propuesta para atenderla, incluyendo la asignación de responsabilidades a diferentes niveles. 
              li 
                .lista-ol--cuadro__vineta
                  span 10
                | El cronograma de ejecución. 
              li 
                .lista-ol--cuadro__vineta
                  span 11
                | Los costos de ejecución y mantenimiento. (incluyendo materiales, mano de obra, transporte, impuestos, imprevistos) 
              li 
                .lista-ol--cuadro__vineta
                  span 12
                | Requerimientos de presentación de informes.
    .row.justify-content-center.mt-5
      .col-lg-10.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        .tarjeta.fondo-5.px-3.py-2.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2
              img.p-4(src="@/assets/curso/tema3/fig1.svg")
            .col-lg-10.col-md-9.col-12
              .row.justify-content-between.align-items-center.mb-4.mb-lg-0
                .col.mb-3.mb-sm-0.text-white 
                  h3.mb-1 ¡Estimado Aprendiz!
                  p.text-small Instructivo Plan de Manejo Ambiental
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/embed/buPSHHPnPzk')" target="_blank")
                    span.text-dark Enlace <i>web</i>
                    i.fas.fa-play-circle
</template>
<script>
export default {
  name: 'Tema4',
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
