<template>
  <div id="app">
    <Header />
    <SearchOverlay />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import SearchOverlay from '@/components/SearchOverlay.vue';
import Footer from '@/components/Footer.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    SearchOverlay,
    Footer,
  },
  methods: {
    ...mapActions([
      'setSearch',
    ]),
  },
};
</script>

<style>
html, body {
  height: 100%;
}

#app {
  background-color: #f8f9fa;
  height: 100%;
}
</style>
