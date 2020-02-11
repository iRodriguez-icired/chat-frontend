import Vue from 'vue';
// El nombre del archivo debería de ser el nombre del recurso en convención kebab-caseexport
export default {
  // Aquí tendras que cambiar {nameResource} por el endpoint de la API. Por ejemplo: //
  baseUrl: 'http://localhost:3000/messages?room_id=',
  // definimos el resource que será utilizado en el intersector para traducir los errores
  mergeOptions(...options) {
    const DEFAULT_OPTIONS = { resource: 'messajes.js' }; return Object.assign({},
      DEFAULT_OPTIONS, ...options);
  },
  show(id, options = {}) {
    return Vue.http.get(this.baseUrl + id, options).then(
      (response) => ({
        msg: response.body.messages,
      }),
    );
  },
};
