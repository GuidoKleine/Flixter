<template>
    <b-list-group-item class="mx-1 border">
      <img :alt="show.name" :src=" show.image ? show.image.medium : 'https://via.placeholder.com/210x295.png?text=Cover+unavailable'"/>
        <h6>
          {{ show.name }}
        </h6>
        <h3>
          Score: {{ show.rating.average }}
        </h3>
    </b-list-group-item>
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
