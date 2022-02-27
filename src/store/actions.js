import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log(error)
            });
    },
    
    // context.commit도 구조분해 할당이 가능
    FETCH_JOBS({ commit }) {
        fetchJobsList()
        // destructuring(구조분해 할당)을 할 경우 response를 한번 더 괄호로 묶어준 후 처리
            .then(({ data }) => {
                // context commit도 구조분해 할당이 가능
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error)
            });
    },

    FETCH_ASKS(context) {
        fetchAskList()
            .then(response => {
                context.commit('SET_ASKS', response.data);
            })
            .catch(error => {
                console.log(error)
            });
    }
}