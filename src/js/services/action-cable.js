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
        data: this.parseData(msg, name, param)
      });
    } else {
      Vue.toasted.error(router.app.$t('err2'));
    }
  },
  parseData(msg, name, param) {
    return JSON.stringify({
      author: name,
      text: msg,
      room_id: param
    });
  }
};
