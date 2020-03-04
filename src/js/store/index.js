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
    showGif: false
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
      state.showGif = bool;
    }

  },
  actions: {
  },
  modules: {
  },

  getters: {
    getRoomName: (state => {
      // eslint-disable-next-line no-underscore-dangle
      return id => { return state.rooms.find(room => { return room._id.$oid === id; }); };
    })
  }
});
