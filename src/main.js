import { createApp } from "vue";
import { Quasar, Notify, Loading } from "quasar";

import "@quasar/extras/material-icons/material-icons.css";
import iconSet from "quasar/icon-set/fontawesome-v5";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";

import "quasar/src/css/index.sass";

import App from "./App.vue";
import router from "./router";

const myApp = createApp(App);

myApp.use(Quasar, {
  iconSet: iconSet,
  plugins: { Notify, Loading },
});

myApp.use(router).mount("#app");
