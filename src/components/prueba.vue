<template>
  <div>
    <h1 @click="inc()">Count: {{count}}</h1>
    <button class="negative full-width" @click="reset" >Reset</button>
    <button class="green" @click="count += 10" >+10</button>
    <br>
    <button class="yellow" @click="count += 50" >+50</button>
    <br>
    <button class="orange" @click="count += 100" >+100</button>
    <br>
    <button class="primary" @click="$router.push('/')">Home</button>
    <button class="primary glossy" @click="$refs.modal.open()">
      Launch
    </button>
    <quasar-modal ref="modal" class="maximized">
      <quasar-slider arrows dots class="text-white full-height">
        <div slot="slide" class="bg-primary centered">
          <h1>Slide 1</h1>
          <button class="dark glossy" @click="$refs.modal.close()">Close Me</button>
        </div>
        <div slot="slide" class="bg-secondary centered">
          <h1>Slide 2</h1>
          <button class="dark glossy" @click="$refs.modal.close()">Close Me</button>
        </div>
        <div slot="slide" class="bg-tertiary centered">
          <h1>Slide 3</h1>
          <button class="dark glossy" @click="$refs.modal.close()">Close Me</button>
        </div>
      </quasar-slider>
    </quasar-modal>
  </div>
</template>

<script>
let state = {
  count: 0
}
export default {
  data: () => state,
  methods: {
    inc () {
      this.count++
    },
    reset () {
      this.count = 0
    }

  }
}
</script>
