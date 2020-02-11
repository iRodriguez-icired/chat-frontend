<template>
  <b-input-group>
    <b-form-input
      v-model="inputVal"
      type="text"
      :placeholder="placehold"
      @keyup.enter.native="event()"
    />
    <b-input-group-append>
      <b-button
        :variant="variant"
        @click="event()"
      >
        {{ action }}
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'Input',
  props: {
    model: String,
    enter: String,
    variant: String,
    action: String,
    placehold: String
  },
  computed: {
    inputVal: {
      get() {
        return this.model;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    event() {
      this.$emit('enter');
    }
  }
};
</script>

<style scoped>
</style>
