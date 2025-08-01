import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");

app.config.globalProperties.API_BASE_URL = "http://localhost:2528";
