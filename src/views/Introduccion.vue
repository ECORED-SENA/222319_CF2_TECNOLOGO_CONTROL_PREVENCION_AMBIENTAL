<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="fade-down-right")
      .titulo-principal__numero
        span 1
      h1 Presentación
    p.my-5(data-aos="fade-down-left") Un primer paso para comenzar a implementar la gestión ambiental en las organizaciones es realizando un diagnóstico ambiental, para ello el enfoque es la valoración cualitativa y cuantitativa de impactos y riesgos ambientales, de un sistema socioecológico elegido por su equipo colaborativo, lo cual se verá plasmado en un informe tipo diagnóstico donde detalle de manera cualitativa y cuantitativa los impactos y riesgo ambientales del sistema.
    .row.justify-content-center
      .col-lg-5.col-md-8.col-9.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src="@/assets/curso/presentacion/img1.jpg")
      .col-lg-7.col-md-12(data-aos="fade-down-left")
        p.fondo-1.p-4.p-sm-5 Es importante comprender que cualquier proceso de transformación de productos y prestación de servicios, trae consigo la generación de impactos ambientales positivos y negativos que afectan los sistemas socioecológicos, debido a las prácticas insostenibles y el incumplimiento de las diferentes normas, acuerdos y políticas que regulan estas actividades.
        p Por lo anterior, el diagnóstico del estado actual del sistema se convierte en una herramienta de análisis necesaria para la identificación de los aspectos e impactos ambientales y que, a su vez, le permite la formulación de un plan de acción para el mejoramiento del desempeño ambiental de la organización o proyecto, para así definir medidas de prevención y mitigación ambiental.
    p.mb-4(data-aos="fade-down-left") En esta unidad temática se desarrollará los siguientes temas para tener bases concretas en el proceso de Diagnóstico Ambiental en una organización:
    .row.justify-content-center
      .col-lg-10.col-md-12.fondo-2.p-3.p-sm-5(data-aos="fade-down-right")
        img(src="@/assets/curso/presentacion/img2.svg")


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
