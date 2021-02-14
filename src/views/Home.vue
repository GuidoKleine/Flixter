<template>
  <div class="bg-light">
    <b-container fluid class="py-2" :id="genre"
    v-for='(genre, index) in getGenres' :key="index"
    >
      <h2>
        <b-badge>
          {{genre}}
        </b-badge>
      </h2>
      <b-list-group horizontal class="overflow-auto bg-light p-2">
          <Card :id="show.name" v-for="show in sortByGenre(genre)"
          :key="show + show.id" :show="show"
          />
      </b-list-group>
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
    ...mapGetters([
      'getShows',
      'getGenres',
    ]),
  },
  methods: {
    ...mapActions([
      'setShows',
      'setGenres',
    ]),
    sortByGenre(genre) {
      const sortedByGenre = this.getShows.filter((show) => show.genres
        .some((category) => category === genre)).slice(0, 20);
      return sortedByGenre;
    },
  },
};
</script>
