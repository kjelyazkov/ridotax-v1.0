import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./tailwind.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import mitt from "mitt";

// Components
import AddCarModal from "./components//modals/AddCarModal.vue";

const app = createApp(App)

app.component("add-car-modal", AddCarModal);

app.provide('mitt', mitt());

app.use(store).use(router).mount("#app");
