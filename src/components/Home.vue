<template>
  <div>
    {{ shows }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('setShows');
  },
  computed: mapState([
    'shows',
  ]),
};
</script>

<style>

</style>
