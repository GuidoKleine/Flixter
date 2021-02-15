<template>
  <router-link :to="{ name: 'showDetails', params: { id: show.id} }"
  :title="'Show detail of ' + show.name">
    <b-list-group-item class="mx-1 border"
    @click="setSearchOverlay(false)"
    >
      <img :alt="show.name" :src=" show.image ? show.image.medium : 'https://via.placeholder.com/210x295.png?text=Cover+unavailable'"/>
        <h6>
          {{ show.name }}
        </h6>
        <h3>
          Score: {{ show.rating.average }}
        </h3>
    </b-list-group-item>
  </router-link>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Card',
  props: {
    show: Object,
  },
  computed: {
    ...mapGetters([
      'getSearchOverlay',
      'getSearchedShows',
    ]),
  },
  methods: {
    ...mapActions([
      'setSearchOverlay',
      'setSearchedShows',
    ]),
  },
};
</script>

<style>

</style>
