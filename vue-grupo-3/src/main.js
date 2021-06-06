import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(vuetify)
    // app.use(VueAxios, axios)

app.mount('#app')


// fetch("https://api.thecatapi.com/v1/images/search", { headers: { "x-api-key": "297ece98-a6ac-419d-9d86-fbe4c3ccdeac" } }).then((response) => { response.json().then((json) => console.log(json[0].url)) })