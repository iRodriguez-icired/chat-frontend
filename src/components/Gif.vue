<template>
  <img
    v-if="show"
    class="gif"
    src="../assets/loading.gif"
    alt
  >
</template>

<script>
export default {
  name: 'Gif',
  props: {
    show: Boolean,
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
