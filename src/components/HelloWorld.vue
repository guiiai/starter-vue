<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>
    <slot />
  </h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <div class="tutorial">
      <h3>How to use?</h3>
      <p class="how-to">
        <span>1. Click</span>
        <img
          src="../assets/guiiai.svg"
          class="logo guiiai"
          alt="Guii.ai logo"
        />
        <span>
          to sign in with your
          <a href="https://guii.ai">Guii.ai</a> account.</span
        >
      </p>
      <p class="how-to">
        <span>2. Once redirected back</span>
        <img
          src="../assets/cursor.svg"
          class="logo cursor"
          alt="Guii.ai DevTools cursor"
        />
        <span>
          to hover "<span class="guiiai-title">Guii.ai DevTools</span>" on this
          page.</span
        >
      </p>
      <p class="how-to">
        <span
          >3. Input
          <span class="how-to-input"
            >Change it to
            <span class="orange-to-red-gradient"
              >red to yellow gradient</span
            ></span
          ></span
        >
      </p>
    </div>
  </div>

  <p>
    Learn more about <a href="https://guii.ai">Guii.ai DevTools</a> in the
    <a href="https://guii.ai">Guii.ai</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.tutorial {
  text-align: left;
}

.how-to {
  display: flex;
  align-items: center;
}

.logo {
  width: 20px;
  border-radius: 999px;
  padding: 6px 6px;
  border: 2px solid #558ce3;
  margin-left: 4px;
  margin-right: 4px;
}

.guiiai-title {
  font-weight: 600;
  background: -webkit-linear-gradient(#225ca9, #232323);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.how-to-input {
  display: inline-block;
  padding: 4px 8px;
  background: #eaeaea;
  border-radius: 4px;
}

.orange-to-red-gradient {
  background: -webkit-linear-gradient(180deg, #ff7300, #f80000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
