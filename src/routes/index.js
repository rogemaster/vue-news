import Vue from 'vue';
import VueRouter from 'vue-router';
import News from '../views/News.vue';
import Ask from '../views/Ask.vue';
import Jobs from '../views/Jobs.vue';
import User from '../views/User.vue';

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
            component: News,
        },
        {
            path: '/ask',
            component: Ask,
        },
        {
            path: '/jobs',
            component: Jobs,
        },
        {
            path: '/user/:id',
            component: User,
        }
    ]
})