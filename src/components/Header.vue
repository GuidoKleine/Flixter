<template>
  <b-container fluid class="bg-dark border;"
  style="height: 100px;">
    <header class=" container d-flex justify-content-end text-white text-center">
      <b-btn
      @click='setSearch(!getSearchOverlay)'>
        Search
      </b-btn>
    </header>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'getSearchOverlay',
    ]),
  },
  methods: {
    ...mapActions([
      'setSearch',
    ]),
  },
};
</script>

<style>

</style>
