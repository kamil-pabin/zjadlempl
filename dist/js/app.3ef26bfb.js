(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-4dffa580":"ea6256c1"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-4dffa580":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-4dffa580":"6be961fd"}[t]+".css",i=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],h.parentNode.removeChild(h),a(s)},h.href=i;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1c2e":function(t,e,a){},"1cc7":function(t,e,a){},"1ebe":function(t,e,a){},"331d":function(t,e,a){"use strict";a("4747")},"437b":function(t,e,a){"use strict";a("1c2e")},4747:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-card",{staticClass:"theCard",attrs:{"no-body":""}},[a("div",{staticClass:"butoSidebar"},[a("Sidebar")],1),t.$auth.isAuthenticated?a("div",{staticClass:"butoSidebarRight",attrs:{to:"/profile",active:"/profile"==t.$route.name},on:{click:t.profileLink}},[a("ProfileButton")],1):t._e(),a("b-card-body",{staticClass:"text-center interior"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar"}},[n("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],staticClass:"butoSidebar invert",attrs:{icon:"justify","font-scale":"2"}}),n("b-sidebar",{attrs:{id:"sidebar-backdrop",backdrop:"","no-header":"",shadow:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"sideber"},[n("div",{staticClass:"but"},[n("div",{attrs:{id:"logo"}},[n("img",{attrs:{src:a("cf05"),alt:"Responsive image"}})]),n("b-button",{staticClass:"tabButton",attrs:{to:"/#/",active:"/#/"==t.$route.name}},[t._v(" Home ")]),n("b-button",{staticClass:"tabButton",attrs:{to:"/Browser",active:"/Browser"==t.$route.name},on:{click:t.resetMiasto}},[t._v(" Restauracje ")]),t.$auth.isAuthenticated?n("b-button",{staticClass:"tabButton",attrs:{to:"/profile",active:"/profile"==t.$route.name}},[t._v(" Profil ")]):t._e(),n("b-button",{staticClass:"tabButton",attrs:{to:"/About",active:"About"==t.$route.name}},[t._v(" O nas ")])],1)])]}},{key:"footer",fn:function(e){var a=e.hide;return[t.$auth.loading?t._e():n("div",{staticClass:"sideber but footerEl"},[t.$auth.isAuthenticated?t._e():n("b-button",{staticClass:"tabButton footerEl boldGreen",attrs:{id:"login"},on:{click:t.login}},[t._v("Log in")]),t.$auth.isAuthenticated?n("b-button",{staticClass:"tabButton footerEl bold",attrs:{id:"logout"},on:{click:t.logout}},[t._v("Log out")]):t._e()],1),n("b-button",{staticClass:"tabButton but bold footerEl",on:{click:a}},[n("b-icon",{staticStyle:{fill:"#ff2244",filter:"none"},attrs:{icon:"x-circle",variant:"danger","font-scale":"2","shift-v":"-0.25"}})],1)]}}])})],1)},o=[],c={name:"Sidebar",props:{},methods:{login:function(){this.$auth.loginWithRedirect()},resetMiasto:function(){this.$store.state.miasto=""},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}},l=c,u=(a("437b"),a("2877")),d=Object(u["a"])(l,s,o,!1,null,"6072c218",null),h=d.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sidebar"}},[a("div",{attrs:{id:"avatarDiv"}},[a("img",{staticClass:"avatar",attrs:{src:t.$auth.user.picture}})])])},f=[],m={name:"ProfileButton",props:{},methods:{}},v=m,p=(a("9d7a"),Object(u["a"])(v,b,f,!1,null,"3669d445",null)),g=p.exports,w={components:{Sidebar:h,ProfileButton:g},methods:{profileLink:function(){this.$router.push("/profile")}}},y=w,k=(a("5c0b"),Object(u["a"])(y,r,i,!1,null,null,null)),_=k.exports,j=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"tlo"}},[t._m(0),a("user-location")],1)])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"naglow"}},[a("h1",{attrs:{id:"hello"}},[t._v("Wyszukaj restauracje w której jadłeś: ")])])}],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"poleWyszukiwania"}},[a("router-link",{attrs:{to:"/Browser",active:"Browser"==t.$route.name}},[a("b-list-group",{attrs:{horizontal:""}},[a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center",on:{click:function(e){return t.miastoSelection("Gdańsk")}}},[t._v(" Gdańsk ")]),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center",on:{click:function(e){return t.miastoSelection("Gdynia")}}},[t._v(" Gdynia ")]),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center",on:{click:function(e){return t.miastoSelection("Sopot")}}},[t._v(" Sopot ")])],1)],1),a("div",{attrs:{id:"przyciski"}},[a("div",{attrs:{id:"gpsLoc"}},[a("router-link",{attrs:{to:"/Browser",active:"Browser"==t.$route.name}},[a("b-icon",{attrs:{icon:"geo-alt-fill"},on:{click:function(e){t.locatorButtonPressed(),t.miastoSelection("")}}})],1)],1)])],1)},S=[],z={name:"UserLocation",props:{},data:function(){return{address:"",lat:"",long:"",city:"",sizes:["Śmidowicza","Świętojańska","Gdańska","Młodego G"]}},methods:{locatorButtonPressed:function(){var t=this;this.$store.state.allowedCords=!0,navigator.geolocation.getCurrentPosition((function(e){t.lat=e.coords.latitude,t.long=e.coords.longitude,t.$store.state.cords.lat=t.lat,t.$store.state.cords.long=t.long}))},miastoSelection:function(t){this.$store.state.miasto=t}}},R=z,C=(a("8d22"),Object(u["a"])(R,$,S,!1,null,null,null)),D=C.exports,K={name:"Home",metaInfo:{title:"Zjadłem.pl | Podziel się swoją opinią!"},components:{UserLocation:D},data:function(){return{text:"",long:"",lat:""}},methods:{}},M=K,A=(a("66e5"),Object(u["a"])(M,O,x,!1,null,"0c08180a",null)),L=A.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"browser"},[a("div",{attrs:{id:"tlo"}},[a("naglowek",{attrs:{text:"ZJADŁEM.PL | WYSZUKIWARKA RESTAURACJI"}}),a("BrowserData")],1)])},P=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"browserData"}},[a("div",{staticClass:"panel"},[a("div",{staticClass:"tytul"},[a("div",{attrs:{id:"gornaLinia"}},[a("div",[a("h2",[t._v(" Znaleziono "+t._s(this.$store.state.restauracje.filter(t.kuchniaSel).length)+" Restauracji "),""!=this.wybranaKuchnia?a("span",[t._v(" z kuchnią "+t._s(this.wybranaKuchnia))]):t._e(),t._v(" "),""!=this.$store.state.miasto?a("span",[t._v(" w "+t._s(this.$store.state.miasto)+" ")]):t._e()])]),""!=this.$store.state.cords.lat?a("div",{attrs:{id:"cords"}},[a("h2",[t._v(" Twoja lokalizacja: "),a("i",[t._v(" "+t._s(this.$store.state.cords.lat)+"E "+t._s(this.$store.state.cords.long)+"N")])])]):a("div",[1==this.$store.state.allowedCords?a("div",[a("b-icon",{attrs:{icon:"arrow-clockwise",animation:"spin","font-scale":"2"}})],1):a("div",[t._v("Brak dostępu do lokalizacji")])])]),a("div",{staticStyle:{display:"flex","justify-content":"space-between"},attrs:{id:"dolnaLinia"}},[a("div",[a("label",[t._v("Ilość wyświetlanych restauracji: "+t._s(t.restLimMax)+" ")])]),a("div",{attrs:{id:"wyborKuchni"}},[t._v(" Kuchnia: "),a("b-button",{on:{click:function(e){t.wybranaKuchnia=""}}},[t._v("Wszystkie ")]),a("b-button",{on:{click:function(e){t.wybranaKuchnia="Polska"}}},[t._v("Polska ")]),a("b-button",{on:{click:function(e){t.wybranaKuchnia="Amerykańska"}}},[t._v("Amerykańska ")]),a("b-button",{on:{click:function(e){t.wybranaKuchnia="Włoska"}}},[t._v("Włoska ")]),a("b-button",{on:{click:function(e){t.wybranaKuchnia="Chińska"}}},[t._v("Chińska ")]),a("b-button",{on:{click:function(e){t.wybranaKuchnia="Sushi"}}},[t._v("Sushi ")]),a("b-button",{on:{click:function(e){t.wybranaKuchnia="Kebab"}}},[t._v("Kebab ")])],1)])]),a("div",{staticClass:"pojemnik"},[a("div",{staticClass:"pojemnikDwa"},t._l(this.$store.state.restauracje.filter(t.kuchniaSel).slice(t.restLimMin,t.restLimMax),(function(e){return a("div",{key:e.id,staticClass:"restauracja",on:{mouseover:function(a){t.changeCurrentRestaurant(e),t.getDistanceFromLatLonInKm()}}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"logoRestDiv"},[a("b-img",{staticClass:"logoRest",attrs:{src:e.Logo,fluid:""}})],1),a("div",{staticClass:"informacje"},[a("div",[t._v(t._s(e.Nazwa))]),t._l(e.Kuchnie,(function(e){return a("span",{key:e,staticClass:"kuchnie"},[t._v(" "+t._s(e)+" ")])}))],2)])])})),0),a("div",{staticClass:"pojemnikDwa"},["brak"!=t.currentRestauracja?a("div",{staticClass:"informacjeRest"},[a("div",[a("p",{attrs:{id:"nazwaRest"}},[t._v(t._s(this.$store.state.restNazwa)+" ")]),a("div",{staticClass:"logoRestDivInfo"},[a("b-img",{staticClass:"logoRest",attrs:{src:this.$store.state.restLogo,fluid:""}})],1),""!=this.$store.state.cords.lat?a("p",{staticClass:"numbers"},[t._v("Odległość: "+t._s(t.dystans)+"km")]):t._e(),a("div",{staticClass:"flex"},[t._v(" Kuchnia:   "),t._l(this.$store.state.restKuchnie,(function(e){return a("span",{key:e,staticClass:"kuchnie",attrs:{id:"kuchOpis"}},[t._v(" "+t._s(e)),t.currentRestauracjaKuchnie.length>1?a("span",[t._v(",  ")]):t._e()])}))],2),a("div",{staticClass:"flex"},[t._v(" Miasto:  "),a("div",[t._v(t._s(this.$store.state.restMiasto))])]),a("div",{staticClass:"flex"},[t._v(" Ulica:  "),a("div",[t._v(t._s(this.$store.state.restUlica)+" "+t._s(this.$store.state.restNumerLokalu))])]),a("div",{staticClass:"flex"},[a("b-button",{attrs:{id:"szczegoly",active:"/restauracja"==t.$route.name},on:{click:t.restaurantLink}},[t._v(" Zobacz więcej")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"brak"!=t.currentRestauracja,expression:"currentRestauracja != 'brak' "}]},[t._v(" Ocena społeczności:   "),a("star-rating",{attrs:{"read-only":!0,inline:!0,"star-size":16,increment:.01,"fixed-points":2,rating:parseFloat(this.$store.state.avgRestOcena),"inactive-color":"#bbbbbb"}})],1),t.$auth.isAuthenticated?a("span",{directives:[{name:"show",rawName:"v-show",value:"brak"!=t.currentRestauracja,expression:"currentRestauracja != 'brak' "}]},[t._v("Twoja ocena:   "),a("star-rating",{attrs:{inline:!0,"star-size":16,increment:.5,"fixed-points":2,rating:parseFloat(this.$store.state.restWybranaOcena[0].Ocena),"inactive-color":"#bbbbbb","active-color":"#ffa800"},on:{"rating-selected":t.setRating}})],1):t._e(),t.$auth.isAuthenticated?a("div",{directives:[{name:"show",rawName:"v-show",value:"brak"!=t.currentRestauracja,expression:"currentRestauracja != 'brak' "}],staticStyle:{"margin-top":"2%"}},[a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Może chcesz coś o tej restauracji napisać?",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:"brak"!=t.currentRestauracja,expression:"currentRestauracja != 'brak' "}]},[t.$auth.isAuthenticated?a("b-button",{staticStyle:{margin:"2%"},attrs:{variant:"success"},on:{click:t.ocenienie}},[t._v("Oceń")]):a("label",{staticStyle:{color:"brown"}},[a("a",{staticStyle:{"text-decoration":"underline"},attrs:{id:"logText"},on:{click:t.login}},[t._v("Zaloguj się")]),t._v(" aby podzielić się własną opinią!")]),a("b-alert",{staticStyle:{padding:"2%","margin-top":"2%"},attrs:{show:t.dismissCountDown,fade:"",variant:"success"},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" Dodano pomyślnie! ")])],1),"brak"!=this.$store.state.restWybranaOcena[0].Komentarz&&null!=this.$store.state.restWybranaOcena[0].Komentarz?a("div",{directives:[{name:"show",rawName:"v-show",value:"brak"!=t.currentRestauracja,expression:"currentRestauracja != 'brak' "}],attrs:{id:"kom"}},[a("div",{staticStyle:{"font-weight":"600","text-align":"left",padding:"1%"}},[t._v("Twój komentarz")]),a("div",{staticStyle:{background:"#ededed",padding:"0%",margin:"1%",border:"3px solid #eeeeee"},attrs:{id:"insKom"}},[a("div",{staticStyle:{padding:"1%",background:"#aaccff","font-weight":"600","justify-content":"space-between",display:"flex"}},[a("div",{staticStyle:{"text-align":"left"}},[t._v(" "+t._s(this.$store.state.restWybranaOcena[0].Autor)+" ")]),t._v(" "),a("div",[t._v(t._s(this.$store.state.restWybranaOcena[0].Data))])]),a("div",[a("div",{staticStyle:{"text-align":"center","font-style":"italic",padding:"2%"}},[t._v(t._s(this.$store.state.restWybranaOcena[0].Komentarz)+" ")])])])]):t._e(),"brak"!=this.$store.state.restWybranaOcenaSpolecznosci[0].Komentarz&&null!=this.$store.state.restWybranaOcenaSpolecznosci[0].Komentarz?a("div",{directives:[{name:"show",rawName:"v-show",value:"brak"!=t.currentRestauracja,expression:"currentRestauracja != 'brak' "}],attrs:{id:"kom"}},[a("div",{staticStyle:{"font-weight":"600","text-align":"left",padding:"1%"}},[t._v("Komentarze społeczności")]),t._l(this.$store.state.restWybranaOcenaSpolecznosci.slice(t.komLimMin,t.komLimMax),(function(e,n){return a("div",{key:n,staticStyle:{background:"#ededed",padding:"0%",margin:"1%"},attrs:{id:"insKom"}},[a("div",{staticStyle:{padding:"1%",background:"#aaccff","font-weight":"600","justify-content":"space-between",display:"flex"}},[a("div",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.Autor))]),a("div",[t._v(t._s(e.Data))])]),a("div",[a("div",{staticStyle:{"text-align":"center","font-style":"italic",padding:"2%"}},[t._v(t._s(e.Komentarz))])])])})),a("b-button-group",{staticStyle:{padding:"1%","text-align":"center"}},[t.komLimMax<this.$store.state.restWybranaOcenaSpolecznosci.length?a("b-button",{attrs:{variant:"primary",id:"wiecej"},on:{click:function(e){t.komLimMax+=5}}},[t._v("Wyświetl więcej")]):t._e(),t.komLimMax>7?a("b-button",{attrs:{id:"mniej"},on:{click:function(e){t.komLimMax-=5}}},[t._v("Wyświetl mniej")]):t._e()],1)],2):a("div",{staticStyle:{"font-weight":"600"}},[t._v("Brak komentarzy społeczności! Bądź pierwszy!")])])]):t._e()])]),a("div",{staticClass:"pojemnik"},[a("div",{staticClass:"stopa"},[a("div",{attrs:{id:"lewo"}},[a("b-button-group",[t.restLimMax<this.$store.state.restauracje.filter(t.kuchniaSel).length?a("b-button",{attrs:{id:"wiecej"},on:{click:function(e){t.restLimMax+=10}}},[t._v("Wyświetl więcej")]):t._e(),t.restLimMax>11?a("b-button",{attrs:{id:"mniej"},on:{click:function(e){t.restLimMax-=10}}},[t._v("Wyświetl mniej")]):t._e()],1)],1),a("div",{attrs:{id:"prawo"}})])])])])},N=[],I=(a("caad"),a("2532"),a("d81d"),a("4f60")),B=(a("1862"),{apiKey:"AIzaSyB7PECrKv0hec-rYEGRZ9pwY2qjD1anjXA",authDomain:"zjadlempl.firebaseapp.com",projectId:"zjadlempl",storageBucket:"zjadlempl.appspot.com",messagingSenderId:"458619606689",appId:"1:458619606689:web:1a0a6f1949fa4e613202e0",measurementId:"G-LJB5883T1H"}),U=I["a"].initializeApp(B).firestore(),T=I["a"].firestore;T.TimeStamp,T.GeoPoint;U.settings({timestampsInSnapshots:!0});var G,Z=a("5b3d"),F=a.n(Z),J={name:"BrowserData",props:{},components:{StarRating:F.a},data:function(){return{currentRestauracja:"brak",inputRest:"",currentRestauracjaNazwa:"brak",currentRestauracjaMiasto:"brak",currentRestauracjaOcena:"brak",currentRestauracjaLogo:"brak",currentRestauracjaKuchnie:"brak",currentRestauracjaUlica:"brak",currentRestauracjaLokal:"brak",restLimMax:10,restLimMin:0,tak:"",currentRestauracjaAdres:[],currentIndex:-1,liczbaRest:0,kuchnia:null,latOkr:Math.round(1e3*this.$store.state.cords.lat)/1e3,longOkr:Math.round(1e3*this.$store.state.cords.long)/1e3,lat:this.$store.state.cords.lat,long:this.$store.state.cords.long,dystans:[],wybranaKuchnia:"",liczbaFilteredKuchnie:0,ocenaSpolecznosci:[],twojaOcena:0,ocena:4,text:null,dismissSecs:3,dismissCountDown:0,avg:"",komLimMax:2,komLimMin:0}},methods:{kuchniaSel:function(t){return this.liczbaRest=0,""!=this.wybranaKuchnia?t.Kuchnie.includes(this.wybranaKuchnia):t.Kuchnie},setRating:function(t){this.ocena=t,this.$store.state.restSelectedRestOcena=t},ocenienie:function(){this.$store.state.restKomentarz=this.text,this.$store.commit("addOcenaRest"),this.dismissCountDown=this.dismissSecs},countDownChanged:function(t){this.dismissCountDown=t},getDistanceFromLatLonInKm:function(){var t=this.$store.state.cords.lat,e=this.currentRestauracja.Adres._lat,a=this.$store.state.cords.long,n=this.currentRestauracja.Adres._long,r=6371,i=3.14/180*(e-t),s=3.14/180*(n-a),o=Math.sin(i/2)*Math.sin(i/2)+Math.cos(3.14/180*t)*Math.cos(3.14/180*e)*Math.sin(s/2)*Math.sin(s/2),c=2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)),l=r*c;this.dystans=Math.round(this.dystans=100*l)/100},restaurantLink:function(){this.$router.push("/restauracja")},changeCurrentRestaurant:function(t){this.currentRestauracja=t,this.$store.state.restNazwa=t.Nazwa,this.$store.state.restAdres=t.Adres,this.$store.state.restKuchnie=t.Kuchnie,this.$store.state.restLogo=t.Logo,this.$store.state.restMiasto=t.Miasto,this.$store.state.restNumerLokalu=t.NumerLokalu,this.$store.state.restOceny=t.Oceny,this.$store.state.restUlica=t.Ulica,this.$store.state.restMenu=t.Menu,this.$store.state.restKomentarze=t.Komentarze,this.$store.state.restId=t.id,this.$store.dispatch("bindOcenaRest")},login:function(){this.$auth.loginWithRedirect()}},created:function(){this.$store.dispatch("bindRestauracja"),null!=this.$auth.user.email?this.$store.state.currentUserEmail=this.$auth.user.email:this.$store.state.currentUserEmail=null},computed:{btnStates:function(){return this.buttons.map((function(t){return t.state}))}}},H=J,q=(a("5af5"),Object(u["a"])(H,E,N,!1,null,null,null)),Y=q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"justify-content":"space-between",margin:"auto",width:"100%",display:"flex",padding:"1%"},attrs:{id:"naglowek"}},[a("b-icon",{attrs:{icon:"arrow-left","font-scale":"2"},on:{click:t.goBack}}),a("h1",[t._v(t._s(t.text))]),a("b-icon",{attrs:{icon:"house-door","font-scale":"2"},on:{click:t.goHome}})],1)},Q=[],V={name:"Naglowek",props:{text:String},return:{},methods:{goHome:function(){this.$router.push("/")},goBack:function(){this.$router.go(-1)}}},tt=V,et=(a("331d"),Object(u["a"])(tt,X,Q,!1,null,"dd3b0634",null)),at=et.exports,nt={name:"Browser",metaInfo:{title:"Zjadłem.pl | Przeglądaj restauracje"},components:{BrowserData:Y,Naglowek:at},data:function(){return{value:"",context:null}},methods:{fetchData:function(){this.$store.state.cords.lat=10}},props:["lat","long"]},rt=nt,it=(a("ed12"),Object(u["a"])(rt,W,P,!1,null,"4b304cbe",null)),st=it.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"profile"}},[a("div",{attrs:{id:"tlo"}},[a("naglowek",{staticStyle:{"margin-bottom":"2%"},attrs:{text:"ZJADŁEM.PL | PROFIL SMAKOSZA"}}),t.$auth.isAuthenticated?a("div",{staticClass:"menuSmakosza"},[a("h1",[t._v("Twój profil Smakosza")]),a("div",{attrs:{id:"dane"}},[a("div",{attrs:{id:"avatarDiv"}},[a("img",{staticClass:"avatar",attrs:{src:t.$auth.user.picture}})]),a("p",[t._v("Imię i Nazwisko: "+t._s(t.$auth.user.name))]),a("p",[t._v("Email: "+t._s(t.$auth.user.email))]),a("p",[t._v("Nick: "+t._s(t.$auth.user.nickname))])])]):t._e()],1)])},ct=[],lt={name:"Profile",metaInfo:{title:"Zjadłem.pl | Profil"},components:{Naglowek:at},data:function(){return{}},methods:{}},ut=lt,dt=(a("f457"),Object(u["a"])(ut,ot,ct,!1,null,"40be11e5",null)),ht=dt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"restauracja"}},[a("div",{attrs:{id:"tlo"}},[a("naglowek",{attrs:{text:"ZJADŁEM.PL | RESTAURACJA"}}),""!=this.$store.state.restId?a("div",{attrs:{id:"daneRestauracji"}},[a("div",{staticClass:"informacjeRest"},[a("div",[a("div",{staticClass:"flex",staticStyle:{"margin-bottom":"2%"}},[a("b-img",{staticClass:"logoRest",staticStyle:{filter:"drop-shadow(0 0 5px rgba(51, 51, 51, 0.668))"},attrs:{src:this.$store.state.restLogo,fluid:""}})],1),a("div",{staticClass:"flex",staticStyle:{"box-shadow":"0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)","border-radius":"4% 4% 4% 4%"}},[a("div",{staticClass:"menu",staticStyle:{display:"block","text-align":"left",background:"#eeeeee","border-radius":"4% 0% 0% 4%"}},[a("h2",[t._v("Menu:  ")]),t._l(this.$store.state.restMenu,(function(e,n){return a("div",{key:n,staticClass:"kuchnie",staticStyle:{display:"block"},attrs:{id:"menuOpis"},on:{mouseover:function(a){t.changeCurrentDanie(e),t.komLimMax=2}}},[a("div",{attrs:{id:"danie"}},[a("span",{attrs:{id:"id"}},[t._v(t._s(n+1)+".")]),a("span",{attrs:{id:"kat"}},[t._v(" "+t._s(e.Kategoria)+": ")]),a("span",{attrs:{id:"skladniki"}},[t._v(t._s(e.Nazwa)+"  ")])])])}))],2),a("div",{staticClass:"potrawa",staticStyle:{display:"block","text-align":"left",background:"#afcfff","border-radius":"0% 4% 4% 0%","overflow-y":"scroll !important"}},[a("div",{attrs:{id:"potrawaIns"}},[a("h2",[t._v("Danie ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=this.wybraneDanie,expression:"this.wybraneDanie != '' "}],attrs:{id:"ocenaDania"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.wybraneDanie,expression:"this.wybraneDanie != '' "}],staticStyle:{color:"brown"},attrs:{id:"kat"}},[t._v(" "+t._s(this.$store.state.restWybranaPotrawaKategoria)+": ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=this.wybraneDanie,expression:"this.wybraneDanie != '' "}],attrs:{id:"skladniki"}},[t._v(t._s(this.$store.state.restWybranaPotrawaNazwa)+"  ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.wybraneDanie,expression:"this.wybraneDanie != '' "}]},[t._v("Ocena społeczności:  "),a("star-rating",{attrs:{"read-only":!0,inline:!0,"star-size":16,increment:.01,"fixed-points":2,rating:this.$store.state.avgOcena,"inactive-color":"#bbbbbb"}})],1),t.$auth.isAuthenticated?a("span",{directives:[{name:"show",rawName:"v-show",value:""!=this.wybraneDanie,expression:"this.wybraneDanie != '' "}]},[t._v("Twoja ocena:  "),a("star-rating",{attrs:{inline:!0,"star-size":16,increment:.5,"fixed-points":2,rating:this.$store.state.restWybranaPotrawaOcena[0].Ocena,"inactive-color":"#bbbbbb","active-color":"#ffa800"},on:{"rating-selected":t.setRating}})],1):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.wybraneDanie,expression:"this.wybraneDanie != '' "}],staticStyle:{"margin-top":"2%"}},[a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Może chcesz coś o tym daniu napisać?",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.wybraneDanie,expression:"this.wybraneDanie != '' "}]},[t.$auth.isAuthenticated?a("b-button",{staticStyle:{margin:"2%"},attrs:{variant:"success"},on:{click:t.ocenienie}},[t._v("Oceń")]):a("label",{staticStyle:{color:"brown"}},[a("a",{staticStyle:{"text-decoration":"underline"},attrs:{id:"logText"},on:{click:t.login}},[t._v("Zaloguj się")]),t._v(" aby podzielić się własną opinią!")]),a("b-alert",{staticStyle:{padding:"2%","margin-top":"2%"},attrs:{show:t.dismissCountDown,fade:"",variant:"success"},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" Dodano pomyślnie! ")])],1),"brak"!=this.$store.state.restWybranaPotrawaOcena[0].Komentarz&&null!=this.$store.state.restWybranaPotrawaOcena[0].Komentarz?a("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.wybraneDanie,expression:"this.wybraneDanie != '' "}],attrs:{id:"kom"}},[t._v(" Twój komentarz: "),a("div",{staticStyle:{background:"#ededed",padding:"0%",margin:"1%",border:"3px solid #eeeeee"},attrs:{id:"insKom"}},[a("div",{staticStyle:{padding:"1%",background:"#aaccff","font-weight":"600","justify-content":"space-between",display:"flex"}},[a("div",{staticStyle:{"text-align":"left"}},[t._v(" "+t._s(this.$store.state.restWybranaPotrawaOcena[0].Autor)+" ")]),t._v(" "),a("div",[t._v(t._s(this.$store.state.restWybranaPotrawaOcena[0].Data))])]),a("div",[a("div",{staticStyle:{"text-align":"center","font-style":"italic",padding:"2%"}},[t._v(t._s(this.$store.state.restWybranaPotrawaOcena[0].Komentarz)+" ")])])])]):t._e(),"brak"!=this.$store.state.restWybranaPotrawaOcenaSpolecznosci[0].Komentarz&&null!=this.$store.state.restWybranaPotrawaOcenaSpolecznosci[0].Komentarz?a("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.wybraneDanie,expression:"this.wybraneDanie != '' "}],attrs:{id:"kom"}},[t._v(" Komentarze społeczności: "),t._l(this.$store.state.restWybranaPotrawaOcenaSpolecznosci.slice(t.komLimMin,t.komLimMax),(function(e,n){return a("div",{key:n,staticStyle:{background:"#ededed",padding:"0%",margin:"1%"},attrs:{id:"insKom"}},[a("div",{staticStyle:{padding:"1%",background:"#aaccff","font-weight":"600","justify-content":"space-between",display:"flex"}},[a("div",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.Autor))]),a("div",[t._v(t._s(e.Data))])]),a("div",[a("div",{staticStyle:{"text-align":"center","font-style":"italic",padding:"2%"}},[t._v(t._s(e.Komentarz))])])])})),a("b-button-group",{staticStyle:{padding:"1%","text-align":"center"}},[t.komLimMax<this.$store.state.restWybranaPotrawaOcenaSpolecznosci.length?a("b-button",{attrs:{variant:"primary",id:"wiecej"},on:{click:function(e){t.komLimMax+=5}}},[t._v("Wyświetl więcej")]):t._e(),t.komLimMax>7?a("b-button",{attrs:{id:"mniej"},on:{click:function(e){t.komLimMax-=5}}},[t._v("Wyświetl mniej")]):t._e()],1)],2):a("div",{staticStyle:{"font-weight":"600"}},[t._v("Brak komentarzy społeczności! Bądź pierwszy!")])])])])])])]):a("div",{on:{mouseover:t.goHome}},[t._v("Brak strony")])],1)])},ft=[],mt={name:"Restauracja",metaInfo:{title:"Zjadłem.pl | Restauracja"},components:{StarRating:F.a,Naglowek:at},data:function(){return{ocena:4,ocenaSpolecznosci:[],wybraneDanie:"",twojaOcena:0,dismissSecs:3,dismissCountDown:0,text:null,avg:"",komLimMax:2,komLimMin:0}},created:function(){this.$store.dispatch("bindMenu")},methods:{login:function(){this.$auth.loginWithRedirect()},calculateOcena:function(){for(var t=0,e=0;e<this.ocenaSpolecznosci.length;e++)t+=parseInt(this.ocenaSpolecznosci[e].Ocena,10);var a=t/this.ocenaSpolecznosci.length;this.avg=a},setRating:function(t){this.ocena=t,this.$store.state.restSelectedOcena=t},changeCurrentDanie:function(t){this.wybraneDanie=t.id,this.$store.state.restWybranaPotrawaId=t.id,this.$store.state.restWybranaPotrawaKategoria=t.Kategoria,this.$store.state.restWybranaPotrawaNazwa=t.Nazwa,this.$store.state.currentUserEmail=this.$auth.user.email,this.$store.dispatch("bindOcena")},ocenienie:function(){this.$store.state.danieKomentarz=this.text,this.$store.commit("addOcenaDania"),this.dismissCountDown=this.dismissSecs},countDownChanged:function(t){this.dismissCountDown=t}}},vt=mt,pt=(a("9bef"),Object(u["a"])(vt,bt,ft,!1,null,"2b08a728",null)),gt=pt.exports,wt=a("5530"),yt=a("1da1"),kt=a("15fd"),_t=(a("ac1f"),a("841c"),a("96cf"),a("9767")),jt=["onRedirectCallback","redirectUri"],Ot=function(){return window.history.replaceState({},document.title,window.location.pathname)},xt=function(){return G},$t=function(t){var e=t.onRedirectCallback,a=void 0===e?Ot:e,r=t.redirectUri,i=void 0===r?window.location.origin:r,s=Object(kt["a"])(t,jt);return G||(G=new n["default"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t,e){var a=this;return Object(yt["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.popupOpen=!0,n.prev=1,n.next=4,a.auth0Client.loginWithPopup(t,e);case 4:return n.next=6,a.auth0Client.getUser();case 6:return a.user=n.sent,n.next=9,a.auth0Client.isAuthenticated();case 9:a.isAuthenticated=n.sent,a.error=null,n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](1),a.error=n.t0,console.error(n.t0);case 17:return n.prev=17,a.popupOpen=!1,n.finish(17);case 20:return n.next=22,a.auth0Client.getUser();case 22:a.user=n.sent,a.isAuthenticated=!0;case 24:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var t=this;return Object(yt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,t.error=null,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),t.error=e.t0;case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=this;return Object(yt["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(_t["a"])(Object(wt["a"])(Object(wt["a"])({},s),{},{client_id:s.clientId,redirect_uri:i}));case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=11;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:n=e.sent,r=n.appState,t.error=null,a(r);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),t.error=e.t0;case 16:return e.prev=16,e.next=19,t.auth0Client.isAuthenticated();case 19:return t.isAuthenticated=e.sent,e.next=22,t.auth0Client.getUser();case 22:return t.user=e.sent,t.loading=!1,e.finish(16);case 25:case"end":return e.stop()}}),e,null,[[3,13,16,25]])})))()}}),G)},St={install:function(t,e){t.prototype.$auth=$t(e)}},zt=function(t,e,a){var n=xt(),r=function(){if(n.isAuthenticated)return a();n.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!n.loading)return r();n.$watch("loading",(function(t){if(!1===t)return r()}))};n["default"].use(j["a"]);var Rt=[{path:"/",name:"Home",component:L},{path:"/Browser",name:"Browser",component:st},{path:"/about",name:"About",component:function(){return a.e("chunk-4dffa580").then(a.bind(null,"f820"))}},{path:"/profile",name:"profile",component:ht,beforeEnter:zt},{path:"/restauracja",name:"restauracja",component:gt}],Ct=new j["a"]({mode:"history",base:"/",routes:Rt}),Dt=Ct,Kt=a("cca8"),Mt=a("5f5b"),At=a("b1e0"),Lt=(a("f9e3"),a("2dd8"),a("2f62")),Wt=a("3317");n["default"].use(Lt["a"]);var Pt=new Lt["a"].Store({state:{events:[],cords:{lat:"",long:""},restCords:{lat:"",long:""},allowedCords:!1,miasto:"",restauracje:[],restauracjeBeta:[],todos:[],error:"",id:null,nazwa:"a",kuchnia:null,user:{loggedIn:!1,data:null},restId:"",restNazwa:"",restAdres:"",restKuchnie:[],restLogo:"",restMiasto:"",restNumerLokalu:"",restOceny:[],restUlica:"",restMenu:[],restKomentarze:[],restWybranaPotrawaId:"",restWybranaPotrawaKategoria:"",restWybranaPotrawaNazwa:"",restWybranaPotrawaOcena:[{Autor:"brak",Ocena:"0",Komentarz:"brak"}],restWybranaPotrawaOcenaSpolecznosci:[{Autor:"brak",Ocena:"0",Komentarz:"brak"}],restWybranaOcena:[{Autor:"brak",Ocena:"0",Komentarz:"brak"}],restWybranaOcenaSpolecznosci:[{Autor:"brak",Ocena:"0",Komentarz:"brak"}],restSelectedOcena:"",restSelectedRestOcena:"",danieKomentarz:"",restKomentarz:"",currentUserEmail:"",danieId:"",avgOcena:0,avgRestOcena:0,wybranaKuchnia:""},getters:{user:function(t){return t.user}},mutations:Object(wt["a"])(Object(wt["a"])({},Wt["b"]),{},{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e},addOcenaDania:Object(Wt["a"])((function(t){var e=t.restId,a=t.restWybranaPotrawaId,n=t.restSelectedOcena,r=t.currentUserEmail,i=t.danieKomentarz,s=new Date,o=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate(),c=U.collection("Restauracje").doc(e).collection("Menu").doc(a).collection("Oceny"),l=U.collection("Restauracje").doc(e).collection("Menu").doc(a).collection("Oceny").where("Autor","==",t.currentUserEmail);l.get().then((function(t){t.docs.map((function(t){return t.data()}));0!=t.docs.length?(c.doc(t.docs[0].id).delete(),c.add({Ocena:n,Autor:r,Komentarz:i,Data:o})):c.add({Ocena:n,Autor:r,Komentarz:i,Data:o})}))})),addOcenaRest:Object(Wt["a"])((function(t){var e=t.restId,a=t.restSelectedRestOcena,n=t.currentUserEmail,r=t.restKomentarz,i=new Date,s=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),o=U.collection("Restauracje").doc(e).collection("Oceny"),c=U.collection("Restauracje").doc(e).collection("Oceny").where("Autor","==",t.currentUserEmail);c.get().then((function(t){t.docs.map((function(t){return t.data()}));0!=t.docs.length?(o.doc(t.docs[0].id).delete(),o.add({Ocena:a,Autor:n,Komentarz:r,Data:s})):o.add({Ocena:a,Autor:n,Komentarz:r,Data:s})}))}))}),modules:{},actions:{bindRestauracja:Object(Wt["a"])((function(t){var e=t.bindFirestoreRef,a=t.state,n=a.miasto,r="restauracje",i="Restauracje",s="==",o="Miasto";return""!=n?e(r,U.collection(i).where(o,s,n)):e("restauracje",U.collection("Restauracje"))})),readOcenaDaniaBetaDwa:Object(Wt["a"])((function(t){var e=t.bindFirestoreRef,a=t.state,n=a.restId,r=a.restWybranaPotrawaId,i=U.collection("Restauracje").doc(n).collection("Menu").doc(r).collection("Oceny").where("Autor","==",a.currentUserEmail),s=U.collection("Restauracje").doc(n).collection("Menu").doc(r).collection("Oceny");i.get().then((function(t){t.docs.map((function(t){return t.data()}));0!=t.docs.length?e("restWybranaPotrawaOcena",i):a.restWybranaPotrawaOcena=[{Autor:"brak",Ocena:"0",Komentarz:"brak"}]})),s.get().then((function(t){var n=t.docs.map((function(t){return t.data()}));if(0!=t.docs.length){e("restWybranaPotrawaOcenaSpolecznosci",s);for(var r=0,i=0;i<n.length;i++)r+=n[i].Ocena;var o=r/n.length;a.avgOcena=o,e("avgOcena",o)}else o=0,a.avgOcena=o,a.restWybranaPotrawaOcenaSpolecznosci=[{Autor:"brak",Ocena:"0",Komentarz:"brak"}]}))})),readOcenaRestBetaDwa:Object(Wt["a"])((function(t){var e=t.bindFirestoreRef,a=t.state,n=a.restId,r=U.collection("Restauracje").doc(n).collection("Oceny").where("Autor","==",a.currentUserEmail),i=U.collection("Restauracje").doc(n).collection("Oceny");r.get().then((function(t){t.docs.map((function(t){return t.data()}));0!=t.docs.length?e("restWybranaOcena",r):a.restWybranaOcena=[{Autor:"brak",Ocena:"0",Komentarz:"brak"}]})),i.get().then((function(t){var n=t.docs.map((function(t){return t.data()}));if(0!=t.docs.length){e("restWybranaOcenaSpolecznosci",i);for(var r=0,s=0;s<n.length;s++)r+=n[s].Ocena;var o=r/n.length;a.avgRestOcena=o,e("avgRestOcena",o)}else o=0,a.avgRestOcena=o,a.restWybranaOcenaSpolecznosci=[{Autor:"brak",Ocena:"0",Komentarz:"brak"}]}))})),bindOcena:function(t){t.state;var e=t.dispatch;e("readOcenaDaniaBetaDwa")},bindOcenaRest:function(t){t.state;var e=t.dispatch;e("readOcenaRestBetaDwa")},bindMenu:Object(Wt["a"])((function(t){var e=t.bindFirestoreRef,a=t.state,n="restMenu",r="restOceny",i="Restauracje",s=a.restId;""!=s&&(e(n,U.collection(i).doc(s).collection("Menu")),e(r,U.collection(i).doc(s).collection("Menu").doc(a.restMenu[0]).collection("Oceny"))),console.log(a.restOceny)})),fetchUser:function(t,e){var a=t.commit;a("SET_LOGGED_IN",null!==e),a("SET_USER",e?{displayName:e.displayName,email:e.email}:null)}}}),Et=a("58ca"),Nt=a("8160");n["default"].use(St,{domain:Nt["b"],clientId:Nt["a"],onRedirectCallback:function(t){Dt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),n["default"].config.productionTip=!1,n["default"].use(Kt["a"]),n["default"].use(Et["a"]),n["default"].use(Mt["a"]),n["default"].use(At["a"]),new n["default"]({router:Dt,store:Pt,render:function(t){return t(_)}}).$mount("#app")},"5af5":function(t,e,a){"use strict";a("1ebe")},"5c0b":function(t,e,a){"use strict";a("9c0c")},6011:function(t,e,a){},"66e5":function(t,e,a){"use strict";a("7614")},7614:function(t,e,a){},8160:function(t){t.exports=JSON.parse('{"b":"zjadlempl.eu.auth0.com","a":"fd6YiIlIluzEdfeIN5diqgPpBwxaaeRc"}')},"8d22":function(t,e,a){"use strict";a("e108")},9728:function(t,e,a){},"9bef":function(t,e,a){"use strict";a("9728")},"9c0c":function(t,e,a){},"9d7a":function(t,e,a){"use strict";a("1cc7")},cf05:function(t,e,a){t.exports=a.p+"img/logo.b2b3a909.png"},e108:function(t,e,a){},e5c4:function(t,e,a){},ed12:function(t,e,a){"use strict";a("6011")},f457:function(t,e,a){"use strict";a("e5c4")}});
//# sourceMappingURL=app.3ef26bfb.js.map