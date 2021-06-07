import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router)
app.use(vuetify)

app.mount('#app')


// fetch("https://api.thecatapi.com/v1/images/search", { headers: { "x-api-key": "297ece98-a6ac-419d-9d86-fbe4c3ccdeac" } }).then((response) => { response.json().then((json) => console.log(json[0].url)) })