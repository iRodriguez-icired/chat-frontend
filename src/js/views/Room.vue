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
      :show="show"
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
import {mapState, mapMutations, mapGetters} from 'vuex';
import Box from '../components/Box.vue';
import CustomInput from '../components/CustomInput.vue';
import Head from '../components/Head.vue';
// eslint-disable-next-line import/no-cycle
import API from '../services/api/resource';

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
    ...mapState(['name', 'messages', 'show']),
    ...mapGetters(['getRoomName'])
  },
  created() {
    if (this.name !== '') {
      this.setMsg([]);
      this.param = this.$router.history.current.params.id;
      this.getRoom();
      this.setState(true);
      API.messages.show(this.param).then(response => {
        this.getRoomMessages(response);
      });
    } else {
      this.$router.push('/', () => {});
    }
  },
  mounted() {
    this.$cable.subscribe({
      channel: 'RoomChannel',
      id: this.param
    });
  },
  channels: {
    RoomChannel: {
      connected() {},
      received(data) {
        this.messages.push({
          author: data.message.author,
          text: data.message.text
        });
      }
    }
  },
  methods: {
    ...mapMutations(['sendMsg', 'setMsg', 'setState']),
    sendMessage() {
      if (this.msg !== '') {
        this.$cable.perform({
          channel: 'RoomChannel',
          data: {
            content: {
              author: this.name,
              text: this.msg,
              room_id: this.param
            }
          }
        });
        this.msg = '';
      } else {
        this.$toasted.error(this.$t('err2'));
      }
    },
    getRoomMessages(response) {
      if (response && response.msg) {
        this.setMsg(response.msg);
      }

      this.setState(false);
    },
    getRoom() {
      this.roomName = this.getRoomName(this.param).name;
    }
  }
};
</script>
<style scoped>
</style>
