<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://guii.ai/" target="_blank">
      <img src="./assets/guiiai.svg" class="logo guiiai" alt="Guii.ai logo" />
    </a>
  </div>
  <HelloWorld>
    <span>Vite</span> + <span>Vue</span> +
    <span class="guiiai-title">Guii.ai DevTools</span>
  </HelloWorld>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #558ce3aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.guiiai-title {
  background: -webkit-linear-gradient(#225ca9, #232323);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
