<template>
    <div>
        <section>
            <!-- 사용자 상세 정보 -->
            <UserPofile :info="fetchedAskInfo">
                <router-link slot="username" :to="`/user/${fetchedAskInfo.user}`">
                    {{ fetchedAskInfo.user }}
                </router-link>
                <template slot="time">{{ 'Posted ' + fetchedAskInfo.time_ago }}</template>
                <div slot="karma">{{ fetchedAskInfo.points }}</div>
            </UserPofile>
        </section>
        <section>
            <h2>{{ fetchedAskInfo.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div>{{ fetchedAskInfo.content }}</div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserPofile from '../components/UserProfile.vue';

export default {
    components: {
        UserPofile
    },
    computed: {
        ...mapGetters([ 'fetchedAskInfo' ])
    },

    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ASKINFO', id);
    }
}
</script>

<style scoped>
.user-containwe {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>