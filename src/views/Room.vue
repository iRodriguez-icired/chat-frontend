<template>
  <div
    class="row row p-4 justify-content-between py-3"
    style="background: #5bc0de; border-radius: 15px"
  >
    <Head
      :btn2="$t('btn4')"
      :roomname="roomname"
      :route2="'/rooms'"
    />

    <Box
      :messages-father="messages"
      class="text-left"
      :show="state"
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
    {{ debugg }}
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import Box from '../components/Box.vue';
import CustomInput from '../components/CustomInput.vue';
import Head from '../components/Head.vue';
import Api from '../js/services/api/resource';

export default {
  components: {
    Box,
    CustomInput,
    Head,
  },
  data() {
    return {
      msg: '',
      param: '',
      debugg: '',
      roomName: '',
    };
  },
  computed: {
    ...mapState(['name', 'messages', 'state']),
    ...mapGetters(['getRoomName']),
  },
  created() {
    if (this.name !== '') {
      this.param = this.$router.history.current.params.id;
      this.getRoom();
      this.setState(true);
      Api.messages.show(this.param).then((res) => {
        this.setMsg(res.msg);
        this.setState(false);
      });
    } else {
      this.$router.push('/', () => {});
    }
  },
  mounted() {
    this.$cable.subscribe({
      channel: 'RoomChannel',
      id: this.param,
    });
  },
  channels: {
    RoomChannel: {
      connected() {},
      received(data) {
        this.messages.push({
          author: data.message.author,
          text: data.message.text,
        });
      },
    },
  },
  methods: {
    ...mapMutations(['sendMsg', 'setMsg', 'setState']),
    sendMessage() {
      this.$cable.perform({
        channel: 'RoomChannel',
        data: {
          content: {
            author: this.name,
            text: this.msg,
            room_id: this.param,
          },
        },
      });
      this.msg = '';
    },
    getRoom() {
      this.roomName = this.getRoomName(this.param).name;
    },
  },

};
</script>
<style scoped>
</style>
