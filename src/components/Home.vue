<template>
  <div class="container">
    <div v-for='show in shows' :key="show.id">
     <CardList :cardtitle="show.name" :cardbody='show.summary'></CardList>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CardList from '@/components/CardList.vue';

export default {
  name: 'Home',
  components: {
    CardList,
  },
  data() {
    return {
      genres: [],
    };
  },
  async created() {
    await this.setShows();
    this.showGenres();
  },
  computed:
  mapState([
    'shows',
  ]),
  methods: {
    ...mapActions([
      'setShows',
    ]),
    showGenres() {
      this.genres = this.$store.getters.getGenres;
      console.log(this.genres);
    },
  },
};
</script>

<style>

</style>
