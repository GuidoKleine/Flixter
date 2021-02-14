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
          @click="setSearchOverlay(!getSearchOverlay)">
          X
        </b-btn>
        <b-container col class="d-flex">
          <b-row>
            <b-col>
              <b-form-input
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
