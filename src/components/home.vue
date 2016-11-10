<template>
  <div>
    <button class="primary" @click="$router.push('/prueba')">Prueba</button>
    <br>
    <br>
    <button class="primary" @click="$router.push('/chat')">Chat</button>
  </div>
</template>

<script>
export default {
  methods: {
    click () {
      console.log(this)
    }
  }
}
</script>
