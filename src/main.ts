import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18n } from "@/i18n";
import { Quasar } from "quasar";
import quasarUserOptions from "@/quasar/quasar-user-options";
import router from "@/router";
import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);
app.use(Quasar, quasarUserOptions);
app.mount("#app");
