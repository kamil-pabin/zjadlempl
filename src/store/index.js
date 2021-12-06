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
        allowedCords: false,
        miasto: '',
        restauracje: [],
        restauracjeBeta: [],
        todos: [],
        error: '',
        id: null,
        nazwa: 'a',
        kuchnia: null,
        user: {
            loggedIn: false,
            data: null
          },
        restId: '', //1wVNqruyQnztG5PplLXH <- manekin
        restNazwa: '',
        restAdres: '',
        restKuchnie: [],
        restLogo: '',
        restMiasto: '',
        restNumerLokalu: '',
        restOceny: [],
        restUlica: '',
        restMenu: [],
        restKomentarze: [],
        restWybranaPotrawaId: '',
        restWybranaPotrawaKategoria:'',
        restWybranaPotrawaNazwa: '',
        restWybranaPotrawaOcena: [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}],
        restWybranaPotrawaOcenaSpolecznosci: [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}],
        restSelectedOcena: '',
        danieKomentarz: '',
        currentUserEmail: '',
        danieId: '',
        avgOcena: 0,

    },
    getters: {
        user(state){
            return state.user
          }
    },
    mutations: {
        ...vuexfireMutations,
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
          },
          SET_USER(state, data) {
            state.user.data = data;
          },
          addOcenaDania: firestoreAction(state => {
            var restauracja = state.restId;
            var potrawa = state.restWybranaPotrawaId;
            var ocena = state.restSelectedOcena;
            var email = state.currentUserEmail;
            var komentarz = state.danieKomentarz;
            var docRef = db.collection('Restauracje').doc(restauracja).collection('Menu').doc(potrawa).collection('Oceny');
            var doc2 = db.collection('Restauracje').doc(restauracja).collection('Menu').doc(potrawa).collection('Oceny').where('Autor', '==', state.currentUserEmail);
            doc2 //dodawanie jesli nie ma twojej opinii
              .get()
              .then(col => {
                const documents = col.docs.map(doc => doc.data())
                if (col.docs.length != 0){ 
                  docRef.doc((col.docs[0].id)).delete()
                  docRef.add({ //najpierw usuwa stara i dodaje nowa
                    Ocena: ocena, 
                    Autor: email,
                    Komentarz: komentarz,
                     })     
                }
                else{ //dodawanie opinii jesli jej wczesniej nie bylo w bazie dziala poprawnie
                  docRef.add({ 
                  Ocena: ocena, 
                  Autor: email,
                  Komentarz: komentarz,
                   })
                }
            })
           }),
     },
     modules: {
     },
     actions: {
         bindRestauracja: firestoreAction(({bindFirestoreRef, state}) => {
             var miasto = state.miasto
             var q = "restauracje";
             var col = "Restauracje";
             var wher = "==";
             var thing = "Miasto";
             if(miasto != '') {
                return bindFirestoreRef(q, db.collection(col).where(thing, wher, miasto));
             }
             else {
                return bindFirestoreRef("restauracje", db.collection("Restauracje"));
             } 
         }),
         readOcenaDaniaBetaDwa: firestoreAction(({bindFirestoreRef, state })=> {
          var restauracja = state.restId;
          var potrawa = state.restWybranaPotrawaId;
          var doc2 = db.collection('Restauracje').doc(restauracja).collection('Menu').doc(potrawa).collection('Oceny').where('Autor', '==', state.currentUserEmail);
          var doc3 = db.collection('Restauracje').doc(restauracja).collection('Menu').doc(potrawa).collection('Oceny');
          doc2 //ocena uzytkownika
            .get()
            .then(col => {
              const documents = col.docs.map(doc => doc.data())
              if (col.docs.length != 0){ 
                bindFirestoreRef("restWybranaPotrawaOcena", doc2);
              }
              else{ 
                state.restWybranaPotrawaOcena = [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}];
              }
          })
          doc3 //liczenie sredniej oceny
            .get()
            .then(col => {
              const documents = col.docs.map(doc => doc.data())
              if (col.docs.length != 0){ 
                bindFirestoreRef("restWybranaPotrawaOcenaSpolecznosci", doc3);
                var sum = 0;
                for (var i=0; i<documents.length; i++){
                  sum += documents[i].Ocena;
                }
                //var avg = 0;
                var avg = sum/documents.length
                state.avgOcena = avg;
                bindFirestoreRef("avgOcena", avg)
              }
              else{ 
                avg = 0
                state.avgOcena = avg
                state.restWybranaPotrawaOcenaSpolecznosci = [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}];
                //state.avgOcena = avg;
                //bindFirestoreRef("avgOcena", avg)
              }
          })
         }),
         bindOcena: ({ state, dispatch }) => {
            dispatch('readOcenaDaniaBetaDwa')
         },
         bindMenu: firestoreAction(({bindFirestoreRef, state}) => {
          var q2 = "restMenu";
          var q3 = "restOceny"
          var col = "Restauracje";
          var col2 = state.restId
          if (col2 != ''){
             bindFirestoreRef(q2, db.collection(col).doc(col2).collection('Menu'));
             bindFirestoreRef(q3, db.collection(col).doc(col2).collection('Menu').doc(state.restMenu[0]).collection('Oceny'))
           }
        }),
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
              commit("SET_USER", {
                displayName: user.displayName,
                email: user.email
              });
            } else {
              commit("SET_USER", null);
            }
        },
      },
});

/*
wybrana kuchnia moze byc tak: return bindFirestoreRef("restauracje", db.collection("Restauracje").where("Kuchnie", "array-contains", "Sushi"));
wybor parametrow mozna definiowac w przegladarce restauracji, przenosic to do store, a ze store juz mozna do zapytania od razu
*/

