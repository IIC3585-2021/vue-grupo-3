<template>
  <v-container class="mt-10">
   <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      :src="cat"
    >
    </v-img>

    <v-card-title>Top 10 Australian beaches</v-card-title>
    <v-card-subtitle class="pb-0">
      {{image}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
import logo from '../assets/logo.svg'
// import { ref } from "vue";
// import image from '../main'

export default {
  name: 'HelloWorld',
  data: () => ({
    items: ['Emocionante', 'Tristecillo', 'Amoroso', ''],
    logo,
    cat: {
    },
  }),
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
