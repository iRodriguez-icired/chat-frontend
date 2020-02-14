import Vue from 'vue';
import router from '../router';

export default {
  error(err) {
    if (!err.status) {
      return Vue.toasted.error(router.app.$t('errNet'));
    }
    return Vue.toasted.error(`${err.status}, ${err.body.message}`);
  }
};
