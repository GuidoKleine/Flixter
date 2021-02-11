<template>
  <div>

    <div v-for='show in shows' :key="show.id">
     <card :title="show.name" :body='show.summary'></card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
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
