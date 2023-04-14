import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';
import mitt, { type Emitter } from 'mitt';
// import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';

const emitter = mitt();

const app = createApp(App);

app.use(VueCookies);
app.use(router);
app.use(VueAxios, axios);

const siteLink = "https://happy.tatar"
// const siteLink = "http://localhost:3000"
const apiLink = "https://api.happy.tatar"
// const apiLink = "http://localhost:3010"

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        siteLink: string
        apiLink: string
        emitter: Emitter<Record<string, unknown>>
    }
}

app.config.globalProperties.siteLink = siteLink
app.config.globalProperties.apiLink = apiLink
app.config.globalProperties.emitter = emitter

localStorage.setItem("email", "")
localStorage.setItem("login", "not logined")
localStorage.setItem("logined", "0")

app.mount('#app');