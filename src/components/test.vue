<template>
  <v-dialog v-model="show">
      <p>modal111111111111111111111111111111111</p>
      <p>modal111111111111111111111111111111111</p>
  </v-dialog>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            show: this.open
        }
    }

}
</script>

<style>

</style>