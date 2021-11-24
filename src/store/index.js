/* eslint-disable no-unused-vars */
// store/index.js
import Vuex, { Store } from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../db'

const firebaseConfig = {
    apiKey: "AIzaSyB7PECrKv0hec-rYEGRZ9pwY2qjD1anjXA",
    authDomain: "zjadlempl.firebaseapp.com",
    projectId: "zjadlempl",
    storageBucket: "zjadlempl.appspot.com",
    messagingSenderId: "458619606689",
    appId: "1:458619606689:web:1a0a6f1949fa4e613202e0",
    measurementId: "G-LJB5883T1H"
  };


import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        events:[],
        cords: {
            lat: '',
            long: ''
        },
        restauracje: [],
        restauracjeBeta: [],
        todos: [],
        error: '',
        id: null,
        nazwa: null,
        kuchnia: null,
        users: [],
    },
    getters: {
    },
    mutations: {
        ...vuexfireMutations,
     },
     modules: {
     },
     actions: {
         bindRestauracja: firestoreAction(({ bindFirestoreRef }) => {
             return bindFirestoreRef("restauracje", db.collection("Restauracje"));
         })
      },
});





