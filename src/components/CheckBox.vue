<template>
    <input type="checkbox" :value="value" @click="toggleCheck">
</template>

<script>
export default {
    // @input 이벤트
    // :value 값
    
    props: ['value'],

    methods: {
        toggleCheck() {
            this.$emit('input', !this.value);
        }
    }
}
</script>

<style>

</style>