<template>
  <div class="home">
    <Principal msg="Tu catmood te está esperando"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Principal from '@/components/Principal.vue'

export default {
  name: 'Home',
  components: {
    Principal
  }
}
</script>
