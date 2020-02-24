import Vue from 'vue';
import router from '../router';

export default {
  error(err) {
    if (!err.status) {
      return Vue.toasted.error(router.app.$t('errNet'));
    }
    let errorMessage;
    switch (err.body.errors.text[0].error) {
      case 'not_found':
        errorMessage = router.app.$t('notFound');
        break;
      case 'taken':
        errorMessage = router.app.$t('taken');
        break;
      case 'blank':
        errorMessage = router.app.$t('blank');
        break;
      default:
        break;
    }

    return Vue.toasted.error(`${err.status}, ${errorMessage}`);
  }
};
