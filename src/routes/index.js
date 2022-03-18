import Vue from 'vue';
import VueRouter from 'vue-router';
import User from '../views/User.vue';
import AskDetail from '../views/AskDetail.vue';
import createListView from '../views/CreateListView'
import Bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',    // url 링크 해쉬(#) 값을 제거
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: createListView('News'),
            beforeEnter: (to, from, next) => {
                Bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // Bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('Ask'),
            beforeEnter: (to, from, next) => {
                Bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // Bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('Jobs'),
        },
        {
            path: '/chart',
            name: 'chart',
            component: () => import('@/views/Chart.vue'),
        },
        {
            path: '/user/:id',
            component: User,
        },
        {
            path: '/askDetail/:id',
            component: AskDetail,
        }
    ]
})