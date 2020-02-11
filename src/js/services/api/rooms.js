import Vue from 'vue';
// El nombre del archivo debería de ser el nombre del recurso en convención kebab-caseexport
export default {
  // Aquí tendras que cambiar {nameResource} por el endpoint de la API. Por ejemplo: //
  baseUrl: 'http://localhost:3000/rooms',
  err(err) {
    if (!err.status) {
      return Vue.toasted.error(this.$t('errNet'));
    }
    return Vue.toasted.error(`Error: ${err.status}, ${err.body.message}`);
  },
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
      .catch(error => {
        this.err(error);
      });
  },
  create(data, options = {}) {
    const obj = {
      name: data
    };
    return Vue.http.post(this.baseUrl, obj, this.mergeOptions(options))
      .then(response => { return response; })
      .catch(error => {
        this.err(error);
      });
  }
  // index(params = {}, options = {}) {
  //     return Vue.http.get(this.baseUrl, options).then(
  //         response => {
  //             return {
  //                 data: response.data.data,
  //                 meta: response.data.meta
  //             };
  //         }
  //     );
  // },
  // show(id, params = {}, options = {}) {
  //     return Vue.http.get(`${this.baseUrl}/${id}`,
  //         options).then(
  //             response => { return response.data.data; }
  //         );
  // },
  // create(data, options = {}) {
  //     const sendData = data instanceof FormData ? data : { data };
  //     return Vue.http.post(this.baseUrl, sendData, this.mergeOptions(options)).then(response
  //         => { return response.data.data; }
  //     );
  // },
  // update(id, data, options = {}) {
  //     const sendData = data instanceof FormData ? data :
  //         { data };
  //     return Vue.http.put(`${this.baseUrl}/${id}`, sendData, this.mergeOptions(options));
  // },
  // save(data, options = {}) {
  //     return data.id ? this.update(data.id, data, options) :
  //         this.create(data, options);
  // },
  // destroy(id, options = {}) {
  //     return Vue.http.delete(`${this.baseUrl}/${id}`,
  //         this.mergeOptions(options));
  // }
};
