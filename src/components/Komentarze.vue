<template>
    <div id="komentarze">
            <div id="kom" v-show="currentRestauracja != 'brak' "
                v-if="
                this.$store.state.restWybranaOcena[0].Komentarz != 'brak' 
                &&
                this.$store.state.restWybranaOcena.length >0 != null
                "
                style="margin-bottom:5px; margin-top:5px; border-radius:10px; padding-bottom:5%;"
                >
                <div style="font-weight: 600; border-radius:10px; text-align: center; padding:1%;">Twój komentarz</div>
                <div id="insKom" style="border-top:1px solid black;border-bottom:1px solid black">  
                    <div id="komTekst" style="padding:1%;font-weight:600;justify-content:space-around;display:flex; border-bottom:1px inset">
                        <div style="text-align: left; width:50%;"> {{ this.$store.state.restWybranaOcena[0].Autor }} <span v-if="this.$store.state.restWybranaOcena[0].Anonim == 1">(Anonimowa)</span> </div> <div style="width:25%">Data: {{ this.$store.state.restWybranaOcena[0].Data }}</div><div style="width:19%; text-align:right">Ocena: {{ this.$store.state.restWybranaOcena[0].Ocena }}</div>
                    </div>
                    <div id="tresc" style="border-radius:10px; border-color:transparent;">
                      <div>
                          <div style="text-align: left; font-style:italic; padding:2%" v-if="this.$store.state.restWybranaOcena[0].Komentarz">{{ this.$store.state.restWybranaOcena[0].Komentarz }}   </div>
                          <div style="text-align:left; color:red; padding: 2%;" v-else><i>Brak komentarza.</i></div>
                      </div>
                    </div>
                </div>
            </div>

            <div id="kom" v-show="currentRestauracja != 'brak' "
                v-if="
                this.$store.state.restWybranaOcenaSpolecznosci[0].Komentarz != 'qqqqqqqxDXSx$qq'
                &&
                this.$store.state.restWybranaOcenaSpolecznosci[0].Autor != 'brak'
                "
                style="margin-bottom:5px; margin-top:5px;"
              >
                <div style="font-weight: 600; text-align: center; padding:1%; border-bottom:1px solid black">Komentarze społeczności ({{this.$store.state.restWybranaOcenaSpolecznosci.length}})</div>
                
                <div id="insKom" v-for="(superOcena, index) in this.$store.state.restWybranaOcenaSpolecznosci.slice(komLimMin,komLimMax)"  :key="index" style="background:#ededed; padding:0%; margin:1%;">
                    <div v-if="superOcena.Komentarz != '' && superOcena.Komentarz != null ">
                        <div id="komTekst" style="padding:1%;  font-weight:600; justify-content:space-around; display:flex; border-bottom:1px inset">
                            <div style="text-align: left; width:50%;" v-if="superOcena.Anonim == 0 || superOcena.Anonim == null">{{ superOcena.Autor }}</div>
                            <div style="text-align: left; width:50%;" v-else>Anonim</div> 
                            <div style="width:30%;">Data: {{superOcena.Data}}</div>
                            <div style="width:20%; text-align:right">Ocena: {{superOcena.Ocena}}</div>
                        </div>
                        <div id="tresc">
                            <div style="text-align: left; font-style:italic; padding:2%">{{ superOcena.Komentarz }}</div>
                        </div>
                    </div>
                    <div v-else>
                        <div id="komTekst" style="padding:1%;  font-weight:600; justify-content:space-around;  display:flex; border-bottom:1px inset">
                            <div style="text-align: left; width:50%;" v-if="superOcena.Anonim == 0 || superOcena.Anonim == null">{{ superOcena.Autor }}</div>
                            <div style="text-align: left; width:50%;" v-else>Anonim</div> 
                            <div style="width:30%;">Data: {{superOcena.Data}}</div>
                            <div style="width:20%; text-align:right">Ocena: {{superOcena.Ocena}}</div>
                        </div>
                        <div id="tresc">
                            <div style="text-align:left; color:red; padding: 2%;"><i>Brak komentarza.</i></div>
                        </div>
                    </div>
                </div>
                <b-button-group style="padding:1%; text-align:center">
                    <b-button  id="wiecej" v-if="komLimMax < this.$store.state.restWybranaOcenaSpolecznosci.length" @click="komLimMax+=5">Wyświetl więcej</b-button>
                    <b-button id="mniej" v-if="komLimMax > 7" @click="komLimMax-=5">Wyświetl mniej</b-button>
                </b-button-group>
              </div>
              <div v-else style="font-weight:600">Brak komentarzy społeczności! Bądź pierwszy!</div>
    </div>
</template>


<script>
export default {
  name: "Komentarze",
  props: { 
      text: String,
   },
  return:{
      
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
#naglowek{
    justify-content:space-between;
    margin:auto;
    width:100%;
    display:flex;
    padding:1%;
}
</style>