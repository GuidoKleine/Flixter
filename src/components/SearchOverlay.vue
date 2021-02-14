<template>
  <b-overlay :show="getSearch">
    <b-btn
    @click="setSearch(getSearch)">
      X
    <b-btn>
  </b-overlay>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchOverlay',
  computed: {
    ...mapGetters([
      'getSearch',
    ]),
  },
  methods: {
    ...mapActions([
      'setSearch',
    ]),
  },
};
</script>
