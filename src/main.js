import { createApp } from "vue";
import { store } from "./store/index";
import App from "./App.vue";
import router from "./router";
import "material-icons/iconfont/material-icons.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
