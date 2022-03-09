<template>
    <div>
        <ListItems />
    </div>
</template>

<script>
import ListItems from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin'

export default {
    components: {
        ListItems
    },
    mixins: [ListMixin]
}
</script>

<style>

</style>