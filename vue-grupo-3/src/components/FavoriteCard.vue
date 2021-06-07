<template>
    <v-container>
        <v-card
            class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px">
            <img :src="url" alt="" :height="200">
            <v-btn
            class="float-right"
            v-on:click="deleteFav"
            icon
            >
                <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
        </v-card>
    </v-container>
</template>

<script>
import store from '../store'
export default ({
    name: 'FavoriteCard',
    props: ['url'],
    methods: {
        deleteFav: function() {
        store.dispatch('deleteFavorite', {
            fav: this.url
            })
    }
  },
})
</script>
