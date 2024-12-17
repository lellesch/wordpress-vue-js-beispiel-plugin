<template>
  <div>
    <h2>Message Component</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
// Props in der `<script setup>`-Schreibweise
defineProps({
  message: {
    type: String,
    default: 'Dies ist eine Standardnachricht!',
  },
});
</script>

<style scoped>
div {
  margin: 10px 0;
  font-size: 1.1rem;
  color: #333;
}
</style>
