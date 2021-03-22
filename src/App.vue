<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld :msg="`Hello Vue 3.0 + Vite`" />
  <router-link to="/test">to Test page</router-link>
  <br>
  <router-view />
</template>

<script lang="ts">
import HelloWorld from '/@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
