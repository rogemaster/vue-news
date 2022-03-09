import ListView from '../views/ListView';
import Bus from '../utils/bus.js';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name,
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
        render(createElement) {
            return createElement(ListView);
        }
    }    
}