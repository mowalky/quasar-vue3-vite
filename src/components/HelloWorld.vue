<script setup>
import { inject } from "vue";
// import global from "../composables/global.js";
// const { state, increment } = global;
const store = inject("store");
</script>

<template>
  <h1>hello {{ store.state.count }}</h1>
</template>

<style scoped></style>
