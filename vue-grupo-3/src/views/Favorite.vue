<template>
  <div class="favorite">
    <h1>Tus favoritos de hoy</h1>
  </div>
  <div v-for="item in favorites" :key="item.id" :list-style="none">
    <favorite-card v-bind:url="item.url"></favorite-card>
  </div>
</template>

<script>
import store from '../store'
import FavoriteCard from '../components/FavoriteCard.vue'

export default ({
  data: () => ({
    favorites: store.state.favorites
  }),
  components: {
    FavoriteCard
  }
})
</script>
