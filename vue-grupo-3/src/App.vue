<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <Select/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Select from './components/Select.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Select,
  },

  data: () => ({
    //
  }),
}
</script>
