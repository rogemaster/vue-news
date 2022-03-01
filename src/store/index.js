import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
        userInfo: {}
    },

    getters: {
        fetchedAsk(state) {
            return state.asks;
        },

        fetchedJobs(state) {
            return state.jobs;
        },

        fetchedNews(state) {
            return state.news;
        },

        fetchedUserInfo(state) {
            return state.userInfo;
        }
    },

    mutations,
    actions,
});