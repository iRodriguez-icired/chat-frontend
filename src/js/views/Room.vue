<template>
  <div
    class="row row p-4 justify-content-between py-3"
    style="background: #5bc0de; border-radius: 15px"
  >
    <Head
      :btn2="$t('btn4')"
      :room-name="roomName"
      :route2="'/rooms'"
    />

    <Box
      :messages-father="messages"
      class="text-left"
      :show-gif="showGif"
    />

    <div
      class="col-12 p-2 mt-2 borde"
      style="background: white;"
    >
      <CustomInput
        :variant="'success'"
        :action="$t('btn5')"
        :placehold="'...'"
        :model="msg"
        @enter="sendMessage();"
        @input="msg = $event"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-cycle */
import {mapState, mapMutations, mapGetters} from 'vuex';
import Box from '../components/Box.vue';
import CustomInput from '../components/CustomInput.vue';
import Head from '../components/Head.vue';
import API from '../services/api/resource';
import SOCKET from '../services/action-cable';

export default {
  components: {
    Box,
    CustomInput,
    Head
  },
  data() {
    return {
      msg: '',
      param: '',
      roomName: ''
    };
  },
  computed: {
    ...mapState(['name', 'messages', 'showGif']),
    ...mapGetters(['getRoomName'])
  },
  created() {
    this.init();
  },
  mounted() {
    SOCKET.subscribe(this.param);
  },
  channels: {
    RoomChannel: {
      connected() {},
      received(data) {
        this.pushData(data, this.messages);
      }
    }
  },
  methods: {
    init() {
      if (this.name !== '') {
        this.setMsg([]);
        this.param = this.$router.history.current.params.id;
        this.getRoom();
        this.setState(true);
        this.showMessage();
      } else {
        this.$router.push('/', () => {});
      }
    },
    showMessage() {
      API.messages.show(this.param).then(response => {
        this.getRoomMessages(response);
      });
    },
    sendMessage() {
      SOCKET.send(this.msg, this.name, this.param);
      this.msg = '';
    },
    getRoomMessages(response) {
      if (response && response.msg) {
        this.setMsg(response.msg);
      }
      this.setState(false);
    },
    getRoom() {
      this.roomName = this.getRoomName(this.param).name;
    },
    pushData(data, messages) {
      messages.push({
        author: data.message.author,
        text: data.message.text
      });
    },
    ...mapMutations(['sendMsg', 'setMsg', 'setState'])
  }
};
</script>
<style scoped>
</style>
