<template lang="html">
  <div>
    <h1 class="titulo canto">{{canto.nombre}}</h1>
    <div v-for="(estrofa, index) in estrofas" class="estrofa">
      <div v-for="linea in lineas(estrofa)">
        {{linea}}
      </div>
    </div>
  </div>
</template>

<script>
import {buscarCanto} from '../api'
export default {
  data: () => ({
    canto: {}
  }),
  mounted () {
    this.cargar()
  },
  watch: {
    '$route' () {
      this.cargar()
    }
  },
  computed: {
    estrofas () {
      return this.canto.contenido && this.canto.contenido.split('\r\n\r\n')
    }
  },
  methods: {
    cargar () {
      buscarCanto(parseInt(this.$route.params.id, 10)).then(canto => {
        this.canto = canto
      })
    },
    lineas (estrofa) {
      return estrofa.split('\r\n')
    }
  }

}
</script>

<style lang="css">
.titulo.canto {
  text-align: center;
}

.estrofa {
  margin-bottom: 15px;
  text-align: center;
}
</style>
