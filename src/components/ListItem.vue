<template>
    <div>
        <ul class="news-list">
            <li v-for="item in listItems" :key="item.id" class="post">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <!-- 페이지에 따른 분기 처리 -->
                <div>
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a :href="item.url">
                                {{ item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="`askDetail/${item.id}`">
                                {{ item.title }}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by 
                        <router-link 
                            v-if="item.user" 
                            :to="`/user/${item.user}`" 
                            class="link-text"
                        >
                            {{ item.user }}
                        </router-link>
                        <a v-else :href="item.url">{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    /* eslint-disable */

    computed: {
        ...mapGetters([ 'fetchedNews', 'fetchedAsk', 'fetchedJobs', 'fetchedList' ]),
        // computed 속성에서 return 으로 데이터를 전달 할 경우 ESLint 에러가 (Expected to return a value in...) 발생함.
        // 이 경우 ESLint 사용을 별도로 disable 처리 해주면 오류 없이 잘 작동함.
        listItems() {
            return this.fetchedList;
            // const name = this.$route.name;

            // if(name === 'Name') {
            //     return this.fetchedNews;
            // }else if(name === 'Ask') {
            //     return this.fetchedAsk;
            // }else if(name === 'Jobs') {
            //     return this.fetchedJobs;
            // }
        }
    },
    
    // created() {
    //     // 비동기 통신할때 새로운 this가 생성이 됨
    //     //     // es6에서 화살표 함수가 자동으로 바인딩을 해줌
    //     //     // 화살표 함수가 아닌 function 함수 그대로 사용할 경우 별도로 전역 this를 바인딩 하여 상용해야 함
    //     //     // ex) var vm = this;
    //     //     this.$store.dispatch('FETCH_ASKS');

    //     const name = this.$route.name;
    //     let actionName;

    //     if(name === 'Name') {
    //         actionName = 'FETCH_NEWS';
    //     }else if(name === 'Ask') {
    //         actionName = 'FETCH_ASKS';
    //     }else if(name === 'Jobs') {
    //         actionName = 'FETCH_JOBS';
    //     }
    //     this.$store.dispatch(actionName);
    // }
}
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;    
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.news-title {
    margin: 0;

}

.link-text {
    color: #828282;
}
</style>