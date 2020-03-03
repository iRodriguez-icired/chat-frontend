import Vue from 'vue';
import errors from '../errors';

// El nombre del archivo debería de ser el nombre del recurso en convención kebab-caseexport
export default {
  // Aquí tendras que cambiar {nameResource} por el endpoint de la API. Por ejemplo: //
  baseUrl: 'http://localhost:3000/messages?',
  // definimos el resource que será utilizado en el intersector para traducir los errores
  mergeOptions(...options) {
    const DEFAULT_OPTIONS = {resource: 'messajes.js'}; return Object.assign({},
      DEFAULT_OPTIONS, ...options);
  },
  async show(id, options = {}) {
    const url = `${this.baseUrl}room_id=${id}&sort=created_at`;
    const wait = await Vue.http.get(url, options).then(
      response => {
        return {
          msg: response.body.messages
        };
      }
    ).catch(err => {
      errors.error(err);
    });
    return wait;
  }
};
