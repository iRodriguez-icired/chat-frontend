
<template>
  <div class="col-12">
    <div
      class="row"
      style
    >
      <div class="col-12 text-center">
        <h4>{{ name }}</h4>
      </div>
      <div class="col-6 my-3 text-left">
        <b-button
          v-if="route"
          :to="route"
          variant="success"
        >
          {{ btn1 }}
        </b-button>
        <p
          v-if="roomName&&!name"
          class="text-white m-0"
        >
          {{ roomName }}
        </p>
      </div>
      <div class="col-6 my-3 text-right">
        <b-button
          v-if="route"
          variant="success"
          @click="event()"
        >
          {{ btn2 }}
        </b-button>
        <b-button
          v-if="!route"
          :to="route2"
          variant="success"
        >
          {{ btn2 }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    btn1: String,
    btn2: String,
    name: String,
    open: Event,
    route: String,
    roomName: String,
    route2: String,
  },
  methods: {
    event() {
      this.$emit('open');
    },
  },
};
</script>

<style scoped>
</style>
