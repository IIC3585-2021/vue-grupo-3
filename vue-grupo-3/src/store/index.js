import { createStore } from 'vuex'

export default createStore({
    state: {
        favorites: []
    },
    mutations: {
        ADD_FAVORITE(state, payload) {
            let newFavorite = payload.fav;
            state.favorites.push({ 'url': newFavorite });
        }
    },
    actions: {
        addFavorite(context, payload) {
            context.commit('ADD_FAVORITE', payload);
        }
    },
    modules: {}
})