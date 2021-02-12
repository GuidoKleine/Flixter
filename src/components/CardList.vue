<template>
  <div class="container">
    <ul>
      <card :title="cardtitle" :body='cardbody'> </card>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'CardList',
  components: {
    Card,
  },
  props: {
    cardtitle: String,
    cardbody: String,
  },
};
</script>

<style>

</style>
