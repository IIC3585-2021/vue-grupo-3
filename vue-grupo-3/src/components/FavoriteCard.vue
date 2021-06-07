<template>
    <v-container>
        <v-card
            class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px">
            <img :src="url" alt="" :height="200">
        </v-card>
    </v-container>
</template>

<script>

export default ({
    name: 'FavoriteCard',
    props: ['url'],
    // data: () => ({
    //     url: this.props.url
    // }),
})
</script>
