<template>
  <br />
  <p>This is Test page!</p>
  <div>当前用户：{{ state.userName }}</div>
  <button @click="increment">点击更换名字</button>
  <br />
  <br />
  <button @click="$router.push('/')">to Home page</button>
</template>

<script lang="ts">
  import { useState } from '../store';
  export default {
    name: 'Test',
    components: {},
    setup() {
      return { state: useState().state };
    },
    methods: {}
  }
</script>
