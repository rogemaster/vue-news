import Vue from 'vue';
import VueRouter from 'vue-router';
import User from '../views/User.vue';
import AskDetail from '../views/AskDetail.vue';
import createListView from '../views/CreateListView'

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
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('Ask'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('Jobs'),
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