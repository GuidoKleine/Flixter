<template>
  <div>
    <b-container fluid v-for='(genre, index) in getGenres' :key="index">
      <h2>
        <b-badge>
          {{genre}}
        </b-badge>
      </h2>
      <b-card-group deck>
        <div v-for="(show) in sortByGenre(genre)" :key="show + show.id">
          <Card :show="show" />
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
  async created() {
    await this.setShows();
    await this.setGenres();
  },
  computed: {
    ...mapGetters(['getShows', 'getGenres']),
  },
  methods: {
    ...mapActions([
      'setShows',
      'setGenres',
    ]),
    sortByGenre(genre) {
      const sortedByGenre = this.getShows.filter((show) => show.genres
        .some((category) => category === genre));
      return sortedByGenre;
    },
  },
};
</script>

<style>

</style>
