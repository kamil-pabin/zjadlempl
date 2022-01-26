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
        restWybranaPotrawaSkladniki: '',
        restWybranaPotrawaOcena: [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}],
        restWybranaPotrawaOcenaSpolecznosci: [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}],
        restWybranaOcena: [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}],
        restWybranaOcenaSpolecznosci: [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}],
        restSelectedOcena: '',
        restSelectedRestOcena: '',
        danieKomentarz: '',
        restKomentarz: '',
        currentUserEmail: '',
        currentUserNickname: '',
        danieId: '',
        avgOcena: 0,
        avgRestOcena: 0,
        wybranaKuchnia: '',
        listaZnaj: [],
        listaOcen: [],
        listaOcenDan: [],
        listaWszystkichOcen: [],
        nowyKod: '',
        kodUsera: [{kodZnajomego: 'xD'}],
        kodZnajomego: 'ehehhe',
        emailZnajomego: '',
        nicknameZnajomego: '',
        statusDodania: '3',
        czyAnonim: 0,
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
            var restauracjaNazwa = state.restNazwa;
            var potrawa = state.restWybranaPotrawaId;
            var potrawaNazwa = state.restWybranaPotrawaNazwa;
            var ocena = state.restSelectedOcena;
            var email = state.currentUserEmail;
            var komentarz = state.danieKomentarz;
            var anonim = state.czyAnonim;
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var docRef = db.collection('Restauracje').doc(restauracja).collection('Menu').doc(potrawa).collection('Oceny');
            var doc2 = db.collection('Restauracje').doc(restauracja).collection('Menu').doc(potrawa).collection('Oceny').where('Autor', '==', state.currentUserEmail);
            var listaOcen = db.collection('Users').doc(email).collection('Oceny')
            var listaOcenKonkretna = db.collection('Users').doc(email).collection('Oceny').where('ID', '==', potrawa);
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
                    Data: date,
                    Anonim: anonim,
                     })     
                }
                else{ //dodawanie opinii jesli jej wczesniej nie bylo w bazie dziala poprawnie
                  docRef.add({ 
                  Ocena: ocena, 
                  Autor: email,
                  Komentarz: komentarz,
                  Data: date,
                  Anonim: anonim,
                   })
                }
            })

            listaOcenKonkretna //dodawanie jesli nie ma twojej opinii
              .get()
              .then(col => {
                const documents = col.docs.map(doc => doc.data())
                if (col.docs.length != 0){ 
                  listaOcen.doc((col.docs[0].id)).delete()
                  listaOcen.add({ //najpierw usuwa stara i dodaje nowa
                    ID: potrawa,
                    Restauracja: restauracjaNazwa,
                    Ocena: ocena, 
                    Komentarz: komentarz,
                    Data: date,
                    Potrawa: potrawaNazwa,
                    Anonim: anonim,
                     })     
                }
                else{ //dodawanie opinii jesli jej wczesniej nie bylo w bazie dziala poprawnie
                  listaOcen.add({ 
                    ID: potrawa,
                    Restauracja: restauracjaNazwa,
                    Ocena: ocena, 
                    Komentarz: komentarz,
                    Data: date,
                    Potrawa: potrawaNazwa,
                    Anonim: anonim,
                   })
                }
            })
           }),
           remOcenaDania: firestoreAction(state => {
            var restauracja = state.restId;
            var potrawa = state.restWybranaPotrawaId;
            var email = state.currentUserEmail;
            var docRef = db.collection('Restauracje').doc(restauracja).collection('Menu').doc(potrawa).collection('Oceny');
            var doc2 = db.collection('Restauracje').doc(restauracja).collection('Menu').doc(potrawa).collection('Oceny').where('Autor', '==', state.currentUserEmail);
            var listaOcen = db.collection('Users').doc(email).collection('Oceny')
            var listaOcenKonkretna = db.collection('Users').doc(email).collection('Oceny').where('ID', '==', potrawa);
            doc2 //dodawanie jesli nie ma twojej opinii
              .get()
              .then(col => {
                const documents = col.docs.map(doc => doc.data())
                if (col.docs.length != 0){ 
                  docRef.doc((col.docs[0].id)).delete();
                }
            })

            listaOcenKonkretna //dodawanie jesli nie ma twojej opinii
              .get()
              .then(col => {
                const documents = col.docs.map(doc => doc.data())
                if (col.docs.length != 0){ 
                  listaOcen.doc((col.docs[0].id)).delete();    
                }
            })
           }),
           addOcenaRest: firestoreAction(state => {
            var restauracja = state.restId;
            var restauracjaNazwa = state.restNazwa;
            var ocena = state.restSelectedRestOcena;
            var email = state.currentUserEmail;
            var komentarz = state.restKomentarz;
            var anonim = state.czyAnonim;
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var docRef = db.collection('Restauracje').doc(restauracja).collection('Oceny');
            var doc2 = db.collection('Restauracje').doc(restauracja).collection('Oceny').where('Autor', '==', state.currentUserEmail);
            var listaOcen = db.collection('Users').doc(email).collection('Oceny')
            var listaOcenKonkretna = db.collection('Users').doc(email).collection('Oceny').where('ID', '==', restauracja)
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
                    Data: date,
                    Anonim: anonim,
                     })     
                }
                else{ //dodawanie opinii jesli jej wczesniej nie bylo w bazie dziala poprawnie
                  docRef.add({ 
                  Ocena: ocena, 
                  Autor: email,
                  Komentarz: komentarz,
                  Data: date,
                  Anonim: anonim,
                   })
                }
            }),

            listaOcenKonkretna //dodawanie jesli nie ma twojej opinii
              .get()
              .then(col => {
                const documents = col.docs.map(doc => doc.data())
                if (col.docs.length != 0){ 
                  listaOcen.doc((col.docs[0].id)).delete()
                  listaOcen.doc(restauracjaNazwa).set({ //najpierw usuwa stara i dodaje nowa
                    Restauracja: restauracjaNazwa,
                    Ocena: ocena, 
                    Komentarz: komentarz,
                    Data: date,
                    ID: restauracja,
                    Anonim: anonim,
                    Potrawa: 'N/d'
                     })     
                }
                else{ //dodawanie opinii jesli jej wczesniej nie bylo w bazie dziala poprawnie
                  listaOcen.doc(restauracjaNazwa).set({ 
                    Restauracja: restauracjaNazwa,
                    Ocena: ocena, 
                    Komentarz: komentarz,
                    Data: date,
                    ID: restauracja,
                    Anonim: anonim,
                    Potrawa: 'N/d'
                   })
                }
            })

           }),
           remOcenaRest: firestoreAction(state => {
            var restauracja = state.restId;
            var email = state.currentUserEmail;
            var docRef = db.collection('Restauracje').doc(restauracja).collection('Oceny');
            var doc2 = db.collection('Restauracje').doc(restauracja).collection('Oceny').where('Autor', '==', state.currentUserEmail);
            var listaOcen = db.collection('Users').doc(email).collection('Oceny')
            var listaOcenKonkretna = db.collection('Users').doc(email).collection('Oceny').where('ID', '==', restauracja)
            doc2 //dodawanie jesli nie ma twojej opinii
              .get()
              .then(col => {
                const documents = col.docs.map(doc => doc.data())
                if (col.docs.length != 0){ 
                  docRef.doc((col.docs[0].id)).delete();   
                }
            }),
            listaOcenKonkretna //dodawanie jesli nie ma twojej opinii
              .get()
              .then(col => {
                const documents = col.docs.map(doc => doc.data())
                if (col.docs.length != 0){ 
                  listaOcen.doc((col.docs[0].id)).delete();    
                }
            })
          }),
          changeFriendCode: firestoreAction(state => {
            var email = state.currentUserEmail;
            var nowyKod = state.nowyKod;
            var daneUseraKod = db.collection('Users').doc(email)
            const res = daneUseraKod.set({
              kodZnajomego: nowyKod,
              nickname: state.currentUserNickname,
              email: state.currentUserEmail
            })
          }),
          addNewFriend: firestoreAction(state=> {
            var mojmail = state.currentUserEmail;
            var daneUsera = db.collection('Users').doc(mojmail).collection('Znajomi');
            var daneZnaj = db.collection('Users').doc(state.emailZnajomego).collection('Znajomi');
            const res = daneUsera.doc(state.emailZnajomego).set({
              emailZnajomego: state.emailZnajomego
            })
            const res2 = daneZnaj.doc(state.currentUserEmail).set({
              emailZnajomego: state.currentUserEmail
            })
          })
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
                var dlugosc = 0;
                for (var i=0; i<documents.length; i++){
                  if(0<= parseFloat(documents[i].Ocena) <= 5 && isNaN(documents[i].Ocena) == 0)
                  {
                    sum += documents[i].Ocena;
                    dlugosc+=1;
                  }
                  
                }
                //var avg = 0;
                var avg = sum/dlugosc
                //var avg = sum/documents.length
                //console.log(state.avgOcena)
                state.avgOcena = avg;
                //console.log(state.avgOcena)
                //bindFirestoreRef("avgOcena", avg)
                //console.log(state.avgOcena)
              }
              else{ 
                avg = 0
                state.avgOcena = avg
                state.restWybranaPotrawaOcenaSpolecznosci = [{Autor: 'brak', Ocena: '0', Komentarz: ''}];
                //state.avgOcena = avg;
                //bindFirestoreRef("avgOcena", avg)
              }
              //console.log(state.restWybranaPotrawaOcenaSpolecznosci[0].Komentarz)
          })
         }),

         //readocenarest
         readOcenaRestBetaDwa: firestoreAction(({bindFirestoreRef, state })=> {
          var restauracja = state.restId;
          var doc2 = db.collection('Restauracje').doc(restauracja).collection('Oceny').where('Autor', '==', state.currentUserEmail);
          var doc3 = db.collection('Restauracje').doc(restauracja).collection('Oceny');
          if(
          doc2){
          doc2 //ocena uzytkownika
            .get()
            .then(col => {
              const documents = col.docs.map(doc => doc.data())
              if (col.docs.length != 0){ 
                bindFirestoreRef("restWybranaOcena", doc2);
              }
              else{ 
                state.restWybranaOcena = [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}];
              }
          })
        }
          doc3 //liczenie sredniej oceny
            .get()
            .then(col => {
              const documents = col.docs.map(doc => doc.data())
              if (col.docs.length != 0){ 
                bindFirestoreRef("restWybranaOcenaSpolecznosci", doc3);
                var sum = 0;
                for (var i=0; i<documents.length; i++){
                  sum += documents[i].Ocena;
                }
                //var avg = 0;
                var avg = sum/documents.length
                state.avgRestOcena = avg;
                bindFirestoreRef("avgRestOcena", avg)
              }
              else{ 
                avg = 0
                state.avgRestOcena = avg
                state.restWybranaOcenaSpolecznosci = [{Autor: 'brak', Ocena: '0', Komentarz: 'brak'}];
                //state.avgOcena = avg;
                //bindFirestoreRef("avgOcena", avg)
              }
              //console.log(state.restWybranaPotrawaOcenaSpolecznosci[0].Komentarz)
          })
         }),
         bindOcena: ({ state, dispatch }) => {
          dispatch('readOcenaDaniaBetaDwa')
         },
         nowyKodUsera: ({ state, commit }) => {
           console.log("BENIU")
           commit('changeFriendCode')
         },
         bindOcenaAdd: ({ state, dispatch, commit }) => {
          console.log(state.avgOcena)
          commit('addOcenaDania')
          dispatch('readOcenaDaniaBetaDwa')
          console.log(state.avgOcena)
         },
         bindOcenaRem: ({ state, dispatch, commit }) => {
          //console.log(state.avgOcena)
          commit('remOcenaDania')
          dispatch('readOcenaDaniaBetaDwa')
         },
         bindOcenaRest: ({ state, dispatch }) => {
          dispatch('readOcenaRestBetaDwa')
       },
         bindMenu: firestoreAction(({bindFirestoreRef, state}) => {
          var q2 = "restMenu";
          var q3 = "restOceny"
          var col = "Restauracje";
          var col2 = state.restId
          if (col2 != ''){
             bindFirestoreRef(q2, db.collection(col).doc(col2).collection('Menu'))
             bindFirestoreRef(q3, db.collection(col).doc(col2).collection('Menu').doc(state.restMenu[0]).collection('Oceny'))
           }
          console.log(state.restOceny)
          
        }),
        bindUserOceny: firestoreAction(({bindFirestoreRef, state}) => {
          var q2 = "listaOcen";
          bindFirestoreRef(q2, db.collection('Users').doc(state.currentUserEmail).collection('Oceny'))
          var q3 = "listaOcenDan";
          bindFirestoreRef(q3, db.collection('Users').doc(state.currentUserEmail).collection('OcenyDan'))
          var znajomi = "listaZnaj";
          bindFirestoreRef(znajomi, db.collection('Users').doc(state.currentUserEmail).collection('Znajomi'))
          var q4 = "kodUsera";
          bindFirestoreRef(q4, db.collection('Users').doc(state.currentUserEmail))
        }),
        dodajKumpla: firestoreAction(({state, commit}) => {
          console.log('poczatek')
          var kodKumpla = state.kodZnajomego;
          var emailKumpla = state.emailZnajomego;
          console.log(kodKumpla)
          console.log(emailKumpla)
          console.log(state.emailZnajomego)
          console.log('start2')
          if(emailKumpla != state.currentUserEmail){
            var doc2 = db.collection('Users').where('email', '==', emailKumpla)
            doc2 
              .get()
              .then(col => {
                const documents = col.docs.map(doc => doc.data())
                if (col.docs.length != 0){
                  if (documents[0].kodZnajomego == kodKumpla){ 
                    console.log('kod poprawny')
                    commit('addNewFriend')
                    state.statusDodania = '1'
                  }
                  else{ 
                    console.log('error')
                    state.statusDodania = '0'
                  }
                }
                else{
                  console.log('error2')
                  state.statusDodania = '0'
                }
            })
          }
          else{
            console.log('error3')
            state.statusDodania = '0'
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

