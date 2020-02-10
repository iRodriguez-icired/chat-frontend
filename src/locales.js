import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default {
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es: {
      btn1: 'Entrar',
      ph1: 'Nombre de usuario',
      btn2: 'Elige un nombre',
      btn3: 'Crea una sala',
      btn4: 'Salas',
      btn5: 'Enviar',
      btn6: 'Guardar',
      ph3: 'Nombre de la sala',
    },
    en: {
      btn1: 'Enter',
      ph1: 'User name',
      btn2: 'Choose a name',
      btn3: 'Create a room',
      btn4: 'Rooms',
      btn5: 'Send',
      btn6: 'Save',
      ph3: 'Room name',
    },
  },
};
