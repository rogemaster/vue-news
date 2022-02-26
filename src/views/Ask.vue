<template>
    <div>
        <div v-for="ask in ask" :key="ask.id">
            {{ ask.title }}
        </div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
    data() {
        return {
            ask: []
        }
    },

    created() {
        // 비동기 통신할때 새로운 this가 생성이 됨
        // es6에서 화살표 함수가 자동으로 바인딩을 해줌
        // 화살표 함수가 아닌 function 함수 그대로 사용할 경우 별도로 전역 this를 바인딩 하여 상용해야 함
        // ex) var vm = this;
        fetchAskList()
            .then(response => this.ask = response.data)
            .catch(error => console.log(error));
    }

}
</script>

<style>

</style>