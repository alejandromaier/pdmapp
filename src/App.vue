<template>
  <!-- Don't drop "quasar-app" class -->
  <div id="quasar-app">
    <quasar-layout>
      <div slot="header" class="toolbar">
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
          <i>menu</i>
        </button>
        <quasar-toolbar-title :padding="1" v-link="'/'">
          Coritario
        </quasar-toolbar-title>
      </div>

      <!--<quasar-tabs slot="navigation">
        <quasar-tab icon="view_quilt" route="/showcase/layout" exact replace>About</quasar-tab>
        <quasar-tab icon="view_day" route="/showcase/layout/toolbar" replace>Toolbar</quasar-tab>
        <quasar-tab icon="view_day" route="/showcase/layout/tabs" replace>Tabs</quasar-tab>
        <quasar-tab icon="input" route="/showcase/layout/drawer" replace>Drawer</quasar-tab>
      </quasar-tabs>-->

      <quasar-drawer ref="leftDrawer">
        <div class="toolbar light">
          <quasar-toolbar-title :padding="1">
              Lista de cantos
          </quasar-toolbar-title>
        </div>

        <div class="list no-border platform-delimiter">
          <quasar-search placeholder="Buscar" v-model="search"></quasar-search>
          <quasar-drawer-link v-for="canto in cantos" :icon="esFavorito(canto)" :to="'/canto/'+canto.id" exact>
            {{canto.nombre}}
          </quasar-drawer-link>
        </div>
      </quasar-drawer>

      <router-view class="layout-view"></router-view>

      <div slot="footer" class="toolbar">
        <div class="auto flex justify-center within-iframe-hide">
        </div>
        <quasar-toolbar-title :padding="0" class="within-iframe-only">
          Footer
        </quasar-toolbar-title>
      </div>
    </quasar-layout>
  </div>

</template>

<script>
/*
 * Root component
 */

// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require('./themes/app.' + __THEME + '.styl')
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require('quasar/dist/quasar.' + __THEME + '.css')
// ==============================
import {buscarListaDeCantos, buscarCantosPorNombre} from './api'

export default {
  data () {
    return {
      search: '',
      cantos: []
    }
  },
  mounted () {
    buscarListaDeCantos().then(cantos => {
      this.cantos = cantos
    })
  },
  watch: {
    search (val) {
      if (val === '' || val > 0) {
        buscarListaDeCantos().then(cantos => {
          this.cantos = cantos
        })
      }
      else {
        val.toLowerCase()
        buscarCantosPorNombre(val).then(cantos => {
          this.cantos = cantos
        })
      }
    },
    '$route' () {
      this.$refs.leftDrawer.close()
    }
  },
  methods: {
    esFavorito (canto) {
      return canto.destacado ? 'favorite' : 'favorite_border'
    }
  }
}
</script>

<style>
</style>
