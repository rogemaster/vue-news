import Bus from '../utils/bus.js';

export default {
    // 재사용할 컴포넌트 옵션
    created() {
        Bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                Bus.$emit('end:spinner');
            })
            .catch((error) => {
                console.log(error);
            })
    },
}