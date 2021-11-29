/* eslint-disable no-unused-vars */
// store/index.js
import Vuex, { Store } from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../db'
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        events:[],
        cords: {
            lat: '',
            long: ''
        },
        restCords: {
            lat: '',
            long: '',
        },
        miasto: '',
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
         bindRestauracja: firestoreAction(({bindFirestoreRef, state}) => {
             var miasto = state.miasto
             console.log(miasto)
             if(miasto != '') return bindFirestoreRef("restauracje", db.collection("Restauracje").where('Miasto', '==', miasto));
             else {
                return bindFirestoreRef("restauracje", db.collection("Restauracje"));
             }
             
         })
      },
});

/*
wybrana kuchnia moze byc tak: return bindFirestoreRef("restauracje", db.collection("Restauracje").where("Kuchnie", "array-contains", "Sushi"));
wybor parametrow mozna definiowac w przegladarce restauracji, przenosic to do store, a ze store juz mozna do zapytania od razu
*/

