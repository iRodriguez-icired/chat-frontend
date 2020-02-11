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
      :room_name="room_name"
      @open="$bvModal.show('modal-scoped')"
    />
    <Box
      :rooms-father="rooms"
      :show="state"
    />
    <Modal
      :action="'Enter'"
      :placehold="$t('ph3')"
      :evnt="$t('btn6')"
      @enter="createRoom()"
      @input="room_name = $event"
    />
    {{ debugg }}
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
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
      room_name: '',
      debugg: [],
      state: false,
    };
  },
  computed: mapState(['rooms', 'url', 'name']),
  created() {
    if (this.name !== '') {
      this.state = true;
      Api.rooms.index().then((res) => {
        this.setRooms(res.rooms);
        this.state = false;
      });
    } else {
      this.$router.push('/', () => {});
    }
  },
  methods: {
    createRoom() {
      Api.rooms.create(this.room_name).then(() => {
        Api.rooms.index().then((res) => {
          this.setRooms(res.rooms);
          this.state = false;
        });
        this.state = false;
      });
    },
    ...mapActions(['loadRooms']),
    ...mapMutations(['crearSala', 'setRooms', 'setRoomId']),
  },

};
</script>
<style scoped>
</style>
