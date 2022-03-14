<template>
    <div>
        <ListItems />
    </div>
</template>

<script>
import ListItems from '../components/ListItem.vue';
// import ListMixin from '../mixins/ListMixin'
import Bus from '../utils/bus.js';

export default {
    components: {
        ListItems
    },
    // mixins: [ListMixin]
    mounted() {
        Bus.$emit('end:spinner');
    }
}
</script>

<style>

</style>