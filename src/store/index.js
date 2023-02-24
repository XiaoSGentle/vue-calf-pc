import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        userInfo: {},
        isLogin: false
    },
    mutations: {
        // set
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        },
        REMOVE_INFO: (state) => {
            state.token = ''
            state.userInfo = {}
        },
        SET_IP: (state, serverIp) => {
            state.serverIp = serverIp
        },
        REMOVE_IP: (state) => {
            state.serverIp = ''
        },
        IS_LOGIN: (state, islogin) => {
            state.isLogin = islogin
        }
    },
    actions: {
    },
    modules: {
    },
    plugins: [createPersistedState()]
})
