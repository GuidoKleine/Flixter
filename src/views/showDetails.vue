<template>
<div class="bg-light py-3">
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="4">
        <b-img :src=" getSingleShowInfo.image ? getSingleShowInfo.image.medium : 'https://via.placeholder.com/210x295.png?text=Cover+unavailable'"></b-img>
      </b-col>
      <b-col cols="12" md="8">
        <b-card
        :title="getSingleShowInfo.name"
        >
          <div>
            <span
              v-for="genre in getSingleShowInfo.genres"
              :key="genre"
              class="mr-1 mb-6 "
              >
              {{ genre }}
            </span>
            <b-card-title>{{ getSingleShowInfo.rating.average }}</b-card-title>
            <b-card-text  v-html="getSingleShowInfo.summary" />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShowDetails',
  props: {
    id: Number,
    show: Object,
  },
  async created() {
    await this.setShowInfo(this.id);
  },
  computed: {
    ...mapGetters([
      'getSingleShowInfo',
    ]),
  },
  methods: {
    ...mapActions([
      'setShowInfo',
    ]),
  },
};
</script>
