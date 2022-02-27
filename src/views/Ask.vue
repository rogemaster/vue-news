<template>
    <div>
        <p v-for="item in fetchedAsk" :key="item.id">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago}} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([ 'fetchedAsk' ])

        // ...mapState({
        //     ask: state => state.ask
        // })
    },
    
    created() {
        // 비동기 통신할때 새로운 this가 생성이 됨
        // es6에서 화살표 함수가 자동으로 바인딩을 해줌
        // 화살표 함수가 아닌 function 함수 그대로 사용할 경우 별도로 전역 this를 바인딩 하여 상용해야 함
        // ex) var vm = this;
        this.$store.dispatch('FETCH_ASKS');
    }

}
</script>

<style>

</style>