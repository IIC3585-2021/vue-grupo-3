<template>
  <v-app>
    <v-main>
      <Navbar/>
      <HelloWorld/>
      <Select/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Select from './components/Select.vue'
import Navbar from './components/Navbar.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Select,
    Navbar,
  },

  data: () => ({
    //
  }),
}
</script>
