import Vue from 'vue';
import errors from '../errors';

// El nombre del archivo debería de ser el nombre del recurso en convención kebab-caseexport
export default {
  // Aquí tendras que cambiar {nameResource} por el endpoint de la API. Por ejemplo: //
  baseUrl: 'http://localhost:3000/rooms',
  mergeOptions(...options) {
    // definimos el resource que será utilizado en el intersector para traducir los errores
    const DEFAULT_OPTIONS = {resource: 'rooms.js'}; return Object.assign({},
      DEFAULT_OPTIONS, ...options);
  },
  index(options = {}) {
    return Vue.http.get(this.baseUrl, options).then(
      response => {
        return {
          rooms: response.body.rooms
        };
      }
    )
      .catch(err => {
        errors.error(err);
      });
  },
  create(data, options = {}) {
    const obj = {
      name: data
    };
    return Vue.http.post(this.baseUrl, obj, this.mergeOptions(options))
      .then(response => { return response; })
      .catch(err => {
        errors.error(err);
      });
  }
};
