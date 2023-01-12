import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/tailwind.css";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

const app = createApp(App).use(router);

app.config.globalProperties.$filters = {
  dollarFilter,
  percentFilter,
};

app.use(VueChartkick);

app.mount("#app");
