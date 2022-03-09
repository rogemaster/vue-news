import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userInfo: {},
        askInfo: {},
        list: [],
    },

    getters: {
        fetchedUserInfo(state) {
            return state.userInfo;
        },

        fetchedAskInfo(state) {
            return state.askInfo;
        },

        fetchedList(state) {
            return state.list;
        }
    },

    mutations,
    actions,
});