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
      :room-name="roomName"
      @open="$bvModal.show('modal-scoped')"
    />
    <Box
      :rooms-father="rooms"
      :show-gif="showGif"
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
import {mapState, mapMutations} from 'vuex';

import Box from '../components/Box.vue';
import Modal from '../components/Modal.vue';
import Head from '../components/Head.vue';
// eslint-disable-next-line import/no-cycle
import API from '../services/api/resource';

export default {
  components: {
    Box,
    Modal,
    Head
  },
  data() {
    return {
      roomName: ''
    };
  },
  computed: mapState(['rooms', 'url', 'name', 'showGif']),
  created() {
    this.init();
  },
  methods: {
    init() {
      this.setRooms([]);
      if (this.name !== '') {
        this.getRooms();
      } else {
        this.$router.push('/', () => {});
      }
    },
    getRooms() {
      this.setState(true);
      API.rooms.index().then(response => {
        this.getRoomsSuccess(response);
      });
    },
    createRoom() {
      if (this.roomName) {
        this.setState(true);
        API.rooms.create(this.roomName).then(() => {
          this.getRooms();
        });
      } else {
        this.$toasted.error(this.$t('err3'));
      }
    },
    getRoomsSuccess(response) {
      if (response && response.rooms) {
        this.setRooms(response.rooms);
      }

      this.setState(false);
    },
    ...mapMutations(['setRooms', 'setRoomId', 'setState'])
  }

};
</script>
<style scoped>
</style>
