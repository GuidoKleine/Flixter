<template>
  <b-overlay
  no-center
  no-wrap
  fixed
  class="d-inline-block"
  :show="getSearchOverlay"
  opacity="1">
    <template v-slot:overlay>
      <div style="top: 20%; left: 50%;">
      <b-btn
        @click="setSearch(!getSearchOverlay)">
        X
      </b-btn>
      <b-container col class="d-flex">
      <b-form-input
      placeholder="Search for show"
      v-model="searchQuery"
      @input="searchForShows"
      />
      <Card :id="show.name" v-for="show in shows"
          :key="show + show.id" :show="show" />
      </b-container>
      </div>
    </template>
  </b-overlay>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Card from '@/components/Card.vue';

export default {
  name: 'SearchOverlay',
  components: {
    Card,
  },
  data() {
    return {
      searchQuery: '',
      shows: [],
    };
  },
  computed: {
    ...mapGetters([
      'getSearchOverlay',
      'getSearched',
    ]),
  },
  methods: {
    ...mapActions([
      'setSearch',
      'setSearchedShows',
    ]),
    searchForShows() {
      this.shows = this.getSearched(this.searchQuery);
      console.log(this.shows);
    },
  },
};
</script>
