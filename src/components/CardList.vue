<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item">
        <card :title="cardtitle" :body='cardbody'> </card>
      </li>
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
