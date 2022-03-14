<template>
    <div>
        <!-- props방식으로 데이터 전달 -->
        <UserProfile :info="fetchedUserInfo">
            <div slot="username">{{ fetchedUserInfo.id }}</div>
            <span slot="time">{{ 'Joined ' + fetchedUserInfo.created }}, </span>
            <span slot="karma">{{ fetchedUserInfo.karma }}</span>
        </UserProfile>
        <!-- UserProfile store 로 데이터 노출 (해당 방식이 vuex에 좀 더 적합) -->
        <!-- <UserProfile /> -->
        <!-- <p>{{ fetchedUserInfo.id }}</p>
        <p>{{ fetchedUserInfo.karma }}</p>
        <p>{{ fetchedUserInfo.created }}</p> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue';

export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapGetters([ 'fetchedUserInfo' ])
    },

    data() {
        return {
            modalShow: false,
        }
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    },
}
</script>

<style>

</style>