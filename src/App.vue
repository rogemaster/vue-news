<template>
  <div id="app">
    <tool-bar />
      <router-view></router-view>
      <Spinner :loading="lodingStatus" />
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue'
import Bus from './utils/bus.js';

export default {
  name: 'App',
  
  data() {
    return {
      lodingStatus: false,
    }
  },

  components: {
    ToolBar,
    Spinner
  },

  created() {
    Bus.$on('start:spinner', this.startSpinner);
    Bus.$on('end:spinner', this.endSpinner);
  },

  beforeDestroy() {
    Bus.$off('start:spinner', this.startSpinner);
    Bus.$off('end:spinner', this.endSpinner);
  },

  methods: {
    startSpinner() {
      this.lodingStatus = true;
    },

    endSpinner() {
      this.lodingStatus = false;
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}
</style>
