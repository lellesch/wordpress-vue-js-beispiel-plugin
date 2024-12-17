<template>
  <div>
    <h2>Counter Component</h2>
    <p>Wert: {{ count }}</p>
    <button @click="increment">Hochzählen</button>
    <button @click="decrement">Runterzählen</button>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<style scoped>
button {
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
