<template>
  <div>
    <b-card widht="230">
      <img :alt="show.name" :src="show.image.medium"/>
      <b-card-body>
        <h6 class="card-subtitle">
          {{ show.name }}
        </h6>
        <b-card-text>
          {{ show.rating.average }}
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    show: Object,
  },
};
</script>

<style>

</style>
