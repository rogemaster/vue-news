<template>
    <div>
        <p>{{ fetchedAskInfo.title }}</p>
        <div>{{ fetchedAskInfo.content }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters([ 'fetchedAskInfo' ]),
        ...mapActions([ 'FETCH_ASKINFO' ])
    },

    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ASKINFO', id);
    }
}
</script>

<style>

</style>