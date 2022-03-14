import { fetchUserInfo, fetchAskInfo, fetchList } from '../api/index.js';

export default {
    // context.commit도 구조분해 할당이 가능
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //     // destructuring(구조분해 할당)을 할 경우 response를 한번 더 괄호로 묶어준 후 처리
    //         .then(({ data }) => {
    //             // context commit도 구조분해 할당이 가능
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // },

    FETCH_USER(context, userName) {
        return fetchUserInfo(userName)
            .then(({ data }) => {
                context.commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_ASKINFO(context, id) {
        return fetchAskInfo(id)
            .then(({ data }) => {
                context.commit('SET_ASKINFO', data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ data }) => {
                commit('SET_LIST', data);
                return data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}