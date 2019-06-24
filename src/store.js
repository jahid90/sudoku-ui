import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        startMessage: ''
    },
    mutations: {
        updateLoadMessage(state, payload) {
            state.startMessage = payload;
        }
    },
    actions: {
        doPageLoad(context) {
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:8080')
                    .then(response => {
                        context.commit('updateLoadMessage', response.data);
                        resolve();
                    })
                    .catch(error => reject(error));
            });
        }
    },
    getters: {}
});
