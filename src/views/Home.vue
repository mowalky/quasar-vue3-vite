<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
const bar = ref(null);
function trigger() {
  const barRef = bar.value;
  barRef.start();
  $q.notify("Message");
  $q.loading.show({
    message:
      'Some important <b>process</b> is in progress.<br/><span class="text-primary">Hang on...</span>',
    html: true,
  });
  setTimeout(() => {
    const barRef = bar.value;

    if (barRef) {
      $q.loading.hide();
      barRef.stop();
    }
  }, Math.random() * 3000 + 1000);
}
</script>
<template>
  <q-page padding>
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />

    <q-btn color="primary" label="Trigger" @click="trigger" />
  </q-page>
</template>
