<script setup>
import store from "./store";
import { provide } from "vue";
import Header from "./components/Header.vue";
provide("store", store);
</script>

<template>
  <q-layout>
    <q-page-container>
      <Header />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
