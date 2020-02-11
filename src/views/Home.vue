<template>
  <CustomInput
    :variant="'outline-info'"
    :action="$t('btn1')"
    :placehold="$t('ph1')"
    @enter="nameNotEmpty(inputNombreUsuario)"
    @input="inputNombreUsuario = $event"
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CustomInput from '../components/CustomInput.vue';

export default {
  name: 'Home',
  components: { CustomInput },
  data() {
    return {
      inputNombreUsuario: '',
    };
  },
  computed: mapState(['nombre']),
  methods: {
    ...mapMutations(['setNombre']),
    nameNotEmpty(name) {
      if (name !== '') {
        this.setNombre(this.inputNombreUsuario);
      } else {
        this.$toasted.error(this.$t('err1'));
      }
    },
  },

};
</script>

<style scoped>
</style>
