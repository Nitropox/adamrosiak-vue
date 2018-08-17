import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [],
    videoUrl: '',
    moveToTop: 0, // if it is true then css class will be aplied to a video just to move it towards the top a bit,
    name: '' //chosen video name
  },
  getters: {
    getJobs: (state) => {
      return state.jobs;
    },
    getVideo: (state) => {
      return state.videoUrl
    },
    getMoveToTop: state => state.moveToTop,
    getName: state => state.name
  },
  mutations: {
    setJobs: (state, array_of_items) => {
      state.jobs = array_of_items;
    },
    clearJobs: (state) => {
      state.jobs = [];
    },
    setVideo: (state, url) =>{
      state.videoUrl = url;
    },
    setMoveToTop: (state, bool) => {
      state.moveToTop = bool;
    },
    setName: (state,name) =>{
      state.name = name;
    }
  },
  actions: {
    initWork({commit}, arr){
      commit('setJobs', arr);
    },
    deployItems({ commit }, arr){
      commit('clearJobs');
      setTimeout(function(){
        commit('setJobs', arr);
      }, 100);
     
    },
    showVideo({commit},url){
      commit('setVideo', url);
      router.push('/videos');
    },
    assignMoveToTop({commit}, bool){
      commit('setMoveToTop', bool);
    },
    assignName({commit},name){
      commit('setName', name);
    }
  },
})
