<template>
  <div
    id="box"
    class="box row mt-2"
  >
    <div
      v-if="!show"
      class="col-12"
    >
      <p
        v-for="(msg,i) in messagesFather"
        :key="'msg'+i"
        class="mt-3"
      >
        {{ msg.author }} > {{ msg.text }}
      </p>
    </div>
    <div
      v-if="!show"
      class="rooms w-100"
    >
      <div
        v-for="(room,i) in roomsFather"
        :key="'sala'+i"
        class="col-12 my-3 px-4"
      >
        <b-button
          :to="'room/'+room._id.$oid"
          variant="info w-100"
        >
          {{ room.name }}
        </b-button>
      </div>
    </div>
    <div class="col-12 text-center align-self-center">
      <Gif :show="show" />
    </div>
  </div>
</template>

<script>
import Gif from './Gif.vue';

export default {
  name: 'BoxComponent',
  components: {
    Gif
  },
  props: {
    roomsFather: Array,
    messagesFather: Array,
    show: Boolean
  }
};
</script>

<style scoped>
</style>
