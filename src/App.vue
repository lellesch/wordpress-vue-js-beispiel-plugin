<template>
  <div>
    <nav>
      <router-link to="/">Startseite</router-link> |
      <router-link to="/counter">Counter-Seite</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
nav {
  text-align: center;
  margin: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}
</style>
