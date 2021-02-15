<template>
  <b-overlay
  no-center
  no-wrap
  fixed
  class="d-inline-block"
  :show="getSearchOverlay"
  opacity="1">
    <template v-slot:overlay>
      <b-container>
        <b-row>
          <b-col sm="1">
        <b-btn
        class="m-2"
        @click="setSearchOverlay(!getSearchOverlay); searchQuery=''; shows=[]"
        >
          X
        </b-btn>
          </b-col>
            <b-col sm="11">
              <b-form-input
              class="m-2"
              placeholder="Search for show"
              v-model="searchQuery"
              @input="searchForShows"
              />
              <b-list-group horizontal class="overflow-auto bg-light p-2">
                <Card v-for="tvshow in shows"
                :key="tvshow.show.id" :show="tvshow.show"
                />
              </b-list-group>
            </b-col>
          </b-row>
        </b-container>
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
      'setSearchOverlay',
      'setSearchedShows',
    ]),
    async searchForShows() {
      await this.setSearchedShows(this.searchQuery);
      this.shows = await this.getSearched;
    },
  },
};
</script>
