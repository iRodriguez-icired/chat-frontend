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
      err1: 'El nombre no puede estar vacío',
      err2: 'No se puede enviar un mensaje vacío',
      err3: 'El nombre de la sala no puede estar vacío',
      errNet: 'No hay conexión con el servidor'
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
      err1: 'Name cannot be empty',
      err2: 'Unable to send an empty message',
      err3: 'El nombre de la sala no puede estar vacío',
      errNet: 'The name of the room cannot be empty'
    }
  }
};
