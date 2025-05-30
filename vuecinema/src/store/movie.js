import store from './index.js'

store.registerModule('movie', {
    namespaced: true,
    state: {
        login: {
            name: '',
            pass: '',
            remember: ''
        },
        history: []
    },
    mutations: {
        set_login(state, payload) {
            state.login = payload
        },
        set_history(state, payload) {
            state.history = payload
        }
    },
    actions: {
        revise_login(store, payload) {
            store.commit('set_login', payload)
        },
        revise_history(store, payload) {
            store.commit('set_history', payload)
        }
    }
})
