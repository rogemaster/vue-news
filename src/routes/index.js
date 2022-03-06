import Vue from 'vue';
import VueRouter from 'vue-router';
import News from '../views/News.vue';
import Ask from '../views/Ask.vue';
import Jobs from '../views/Jobs.vue';
import User from '../views/User.vue';
import AskDetail from '../views/AskDetail.vue';

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
            name: 'Name',
            component: News,
        },
        {
            path: '/ask',
            name: 'Ask',
            component: Ask,
        },
        {
            path: '/jobs',
            name: 'Jobs',
            component: Jobs,
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