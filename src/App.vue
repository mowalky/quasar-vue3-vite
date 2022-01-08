<script setup>
import store from "./store";
import { provide } from "@vue/runtime-core";

provide("store", store);
</script>

<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style></style>
