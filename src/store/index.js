import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: 'http://localhost:3000',
    name: '',
    rooms: [],
    messages: [],
    show: false,
  },
  mutations: {
    setNombre: (state, name) => {
      state.name = name;
      router.push('/rooms', () => { });
    },

    setRooms: (state, setRooms) => {
      state.rooms = setRooms;
    },
    setMsg: (state, msg) => {
      state.messages = msg;
    },
    setState: (state, bool) => {
      state.show = bool;
    },

  },
  actions: {
  },
  modules: {
  },

  getters: {
    // eslint-disable-next-line no-underscore-dangle
    getRoomName: ((state) => (id) => state.rooms.find((room) => room._id.$oid === id)),
  },
});
