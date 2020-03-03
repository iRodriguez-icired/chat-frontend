import Vue from 'vue';
import router from '../router';

export default {
  subscribe(myid) {
    Vue.prototype.$cable.subscribe({
      channel: 'RoomChannel',
      id: myid
    });
  },
  send(msg, name, param) {
    if (msg !== '') {
      Vue.prototype.$cable.perform({
        channel: 'RoomChannel',
        data: {
          content: {
            author: name,
            text: msg,
            room_id: param
          }
        }
      });
    } else {
      Vue.toasted.error(router.app.$t('err2'));
    }
  }
};
