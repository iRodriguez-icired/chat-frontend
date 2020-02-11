<template>
  <div
    class="row p-4"
    style="background: #5bc0de; border-radius: 15px"
  >
    <Head
      :name="name"
      :route="'/'"
      :btn1="$t('btn2')"
      :btn2="$t('btn3')"
      :roomName="roomName"
      @open="$bvModal.show('modal-scoped')"
    />
    <Box
      :rooms-father="rooms"
      :show="show"
    />
    <Modal
      :action="'Enter'"
      :placehold="$t('ph3')"
      :evnt="$t('btn6')"
      @enter="createRoom()"
      @input="roomName = $event"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Box from '../components/Box.vue';
import Modal from '../components/Modal.vue';
import Head from '../components/Head.vue';
import Api from '../js/services/api/resource';

export default {
  components: {
    Box,
    Modal,
    Head,
  },
  data() {
    return {
      roomName: '',
    };
  },
  computed: mapState(['rooms', 'url', 'name', 'show']),
  created() {
    this.setRooms([]);
    if (this.name !== '') {
      this.setState(true);
      Api.rooms.index().then((res) => {
        if (res !== undefined) {
          this.setRooms(res.rooms);
        }
        this.setState(false);
      });
    } else {
      this.$router.push('/', () => {});
    }
  },
  methods: {
    createRoom() {
      this.setState(true);
      Api.rooms.create(this.roomName).then(() => {
        Api.rooms.index().then((res) => {
          this.setRooms(res.rooms);
          this.setState(false);
        });
        this.setState(false);
      });
    },
    ...mapMutations(['setRooms', 'setRoomId', 'setState']),
  },

};
</script>
<style scoped>
</style>
