import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./tailwind.css";

import TheTop from "./components/TheTop";

const app = createApp(App)

app.component('the-top', TheTop);

app.use(store).use(router).mount("#app");
