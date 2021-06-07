import { createStore } from 'vuex'

export default createStore({
    state: {
        favorites: []
    },
    mutations: {
        ADD_FAVORITE(state, payload) {
            let newFavorite = payload.fav;
            state.favorites.push({ 'url': newFavorite });
        },
        DELETE_FAVORITE(state, payload) {
            let delFavorite = payload.fav;
            let index = null;
            state.favorites.forEach((elem) => {
                if (elem.url === delFavorite) {
                    index = state.favorites.indexOf(elem);
                }
            })
            state.favorites.splice(index, 1)
        },
    },
    actions: {
        addFavorite(context, payload) {
            context.commit('ADD_FAVORITE', payload);
        },
        deleteFavorite(context, payload) {
            context.commit('DELETE_FAVORITE', payload);
        }
    },
    modules: {}
})