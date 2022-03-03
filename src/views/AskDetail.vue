<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div>
                <div>
                    User
                </div>
                <div>
                    <router-link :to="`/user/${fetchedAskInfo.user}`">
                        {{ fetchedAskInfo.user }}
                    </router-link>
                    <div>
                        {{ fetchedAskInfo.time_ago }}
                    </div>
                </div>
                <h2>{{ fetchedAskInfo.title }}</h2>
            </div>
        </section>
        <section>
            <!-- 질문 댓글 -->
        </section>
        <p>{{ fetchedAskInfo.title }}</p>
        <div>{{ fetchedAskInfo.content }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([ 'fetchedAskInfo' ])
    },

    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ASKINFO', id);
    }
}
</script>

<style>

</style>