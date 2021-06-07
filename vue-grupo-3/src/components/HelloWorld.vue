<template>
  <v-container class="mt-10">
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      class="white--text align-center p-10"
      height="300px"
      :src="cat"
    >
    </v-img>
    <v-btn
    class="float-right"
    :disabled="isDisabled"
    v-on:click="favorite"
    icon>
      <v-icon color="pink">mdi-star</v-icon>
    </v-btn>
    <v-card-title>¿Cómo estuvo tu día?</v-card-title>
    <v-card-subtitle class="pb-0">
      Tenemos un gatito para ti
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        v-on:click="sunglasses"
      >
       Emocionante 
      </v-btn>

      <v-btn
        color="blue"
        text
        v-on:click="space"
      >
        Tristecillo
      </v-btn>
      
      <v-btn
        color="purple"
        text
        v-on:click="hats"
      >
        Relajado
      </v-btn>
      <v-btn
        color="red"
        text
        v-on:click="gif"
      >
        Intenso
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
import logo from '../assets/logo.svg'
import store from '../store'
// import { ref } from "vue";
// import image from '../main'

export default {
  name: 'HelloWorld',
  data: () => ({
    logo,
    isDisabled : false,
    cat: {
    },
  }),
  methods: {
    sunglasses: function () {
      this.isDisabled = false;
      fetch("https://api.thecatapi.com/v1/images/search?category_ids=4", 
        {headers: {"x-api-key" : "297ece98-a6ac-419d-9d86-fbe4c3ccdeac"}})
        .then((response) => {
          return response.json()
        }).then((json) => {
            this.cat = json[0].url;
        });
    },
    space: function () {
      this.isDisabled = false;
      fetch("https://api.thecatapi.com/v1/images/search?category_ids=2", 
        {headers: {"x-api-key" : "297ece98-a6ac-419d-9d86-fbe4c3ccdeac"}})
        .then((response) => {
          return response.json()
        }).then((json) => {
            this.cat = json[0].url;
        });
    },
    hats: function () {
      this.isDisabled = false;
      fetch("https://api.thecatapi.com/v1/images/search?category_ids=1", 
        {headers: {"x-api-key" : "297ece98-a6ac-419d-9d86-fbe4c3ccdeac"}})
        .then((response) => {
          return response.json()
        }).then((json) => {
            this.cat = json[0].url;
        });
    },
    gif: function () {
      this.isDisabled = false;
      fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif", { 
        headers: {"x-api-key" : "297ece98-a6ac-419d-9d86-fbe4c3ccdeac"}})
        .then((response) => {
          return response.json()
        }).then((json) => {
            console.log(json);
            this.cat = json[0].url;
        });
    },
    favorite: function() {
      this.isDisabled = true;
      store.dispatch('addFavorite', {
        fav: this.cat
        })
      console.log(store.state.favorites)
    }
  },
  created() {
    fetch("https://api.thecatapi.com/v1/images/search", 
        {headers: {"x-api-key" : "297ece98-a6ac-419d-9d86-fbe4c3ccdeac"}})
        .then((response) => {
          return response.json()
        }).then((json) => {
            console.log(json);
            this.cat = json[0].url;
        });
  },
}
</script>
