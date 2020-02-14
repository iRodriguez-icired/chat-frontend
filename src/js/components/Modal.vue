<template>
  <b-modal id="modal-scoped">
    <template>
      <b-form-input
        v-model="inputVal"
        type="text"
        :placeholder="placehold"
        @keyup.enter.native="$bvModal.hide('modal-scoped');event()"
      />
    </template>

    <template v-slot:modal-footer="{ }">
      <b-button
        variant="success w-100"
        @click="$bvModal.hide('modal-scoped');event()"
      >
        {{ evnt }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {enter: String, placehold: String, evnt: String},
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
