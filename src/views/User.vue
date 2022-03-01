<template>
    <div>
        <p>{{ fetchedUserInfo.id }}</p>
        <p>{{ fetchedUserInfo.karma }}</p>
        <p>{{ fetchedUserInfo.created }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([ 'fetchedUserInfo' ])
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style>

</style>