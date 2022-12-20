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
    .row.mb-5.justify-content-center
      .col-lg-5.col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/fig1.svg')
          .tarjeta.fondo-7.quitar-redondeado
            .p-4
              p #[b a) La identificación de los impactos:] Corresponde a la determinación de la existencia de un cambio en alguna de las condiciones ambientales por efecto de unas acciones de la organización o proyecto. Básicamente es el procedimiento de interrelacionar las ASPI y las FARI, para determinar donde se generan cambios en los factores ambientales. 

      .col-lg-5.col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/fig2.svg')
          .tarjeta.fondo-7.quitar-redondeado
            .p-4
              p #[b b) La evaluación de los impactos ambientales:] Algunos autores la denominan también valoración y consiste en determinar la significancia de los cambios utilizando metodologías reconocidas.
    p.mb-5(data-aos="fade-down-right") En la siguiente Imagen se muestra el esquema que se propone para adelantar esta etapa del diagnóstico, el cual comprende las actividades anteriormente descritas y se le adiciona una tercera que tiene que ver con el manejo de la información que se genera con este proceso.
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
