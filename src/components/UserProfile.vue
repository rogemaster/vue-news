<template>
    <div class="user-containwe">
        <div class="user-avarta">
            User
        </div>
        <div class="user-description">
            <slot name="username"></slot>
            <div class="time">
                <slot name="time"></slot>
                <slot name="karma"></slot>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
    props: {
        info: Object
    },
    // computed: {
    //     ...mapGetters([ 'fetchedUserInfo', 'fetchedAskInfo' ])
    // },
}
</script>

<style scoped>
.user-containwe {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.user-avarta {
    border: solid 1px rgb(0, 0, 0);
    border-radius: 5px;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>