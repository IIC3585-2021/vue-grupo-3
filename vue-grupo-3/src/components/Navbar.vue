<template>

<v-app-bar density="compact">
      <v-app-bar-title>Tu Cat</v-app-bar-title>
  
      <v-spacer></v-spacer>
      <v-btn text><router-link to="/">Home</router-link></v-btn>
      <v-btn class="mr-3" text><router-link to="/favorite">Favoritos</router-link></v-btn>
      <router-view/>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'Navbar',
    data: () => ({
    //
  }),
  }
</script>