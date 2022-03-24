import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
	},
	getters: {},
	mutations: {
		setState(state, data) {
			state[data.key] = data.value
		}
	},
	actions: {
	}
});

export default store;