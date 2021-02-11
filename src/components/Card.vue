<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">
        {{ title }}
      </h5>
      <p class="card-text">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    body: String,
  },
};
</script>

<style>

</style>
