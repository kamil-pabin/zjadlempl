<template>
  <div class="about">
    <div id="tlo2">
      <div class="background" id="backgroundFirst">
        <b-img-lazy fluid class="backgroundImage" :src="images.image2" alt="background" style="height:100vh; width:100vw; object-fit:cover" />
      </div>
    </div>
    <div id="container">
      <div class="tresc">
        Istnieje wiele serwisów, w których możemy oceniać filmy, gry czy np. książki. Lecz brakowało nam przestrzeni, w której otrzymalibyśmy recenzje innych, o lokalach restauracyjnych oraz ich daniach. Dlatego w tym miejscu, pojawia się młody, ambitny zespół, ze Zjadłem.pl - Nie spotkaliśmy się nigdy ze stroną, która umożliwiałaby podejrzenie menu restauracji, z podpiętymi do niej recenzjami gości, dlatego postanowiliśmy stworzy własną.
      </div>
      <div class="tresc">
        Na Zjadlem.pl możesz przeglądać restauracje z danego miasta, sprawdzić o nim opinie jak i opinie o daniach z menu. Dodatkowo, możesz zaprosić swoich znajomych smakoszy i podejrzeć ich ostatnie kulinarne doświadczenia na mieście.
      </div>
      <div class="tresc">
        W razie problemów - zapraszamy do kontaktu, z wielką chęcią odpowiemy!
        Email kontaktowy - <a href="mailto:zjadlempl@gmail.com">zjadlempl@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/background1.webp"
import image2 from "../assets/background2.webp"
import image3 from "../assets/background3.webp"
import image4 from "../assets/background4.webp"
export default {
  
  name: 'About',
  metaInfo:{
    title: 'Zjadłem.pl | Dowiedz się więcej!',
    htmlAttrs: {
      lang: 'pl-PL'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Strona pozwalajaca ocenic jedzenie w restauracjach - Zjadlempl.' },
    ]
  },
  data () {
    return {
      value: '',
      images: {
            image1,
            image2,
            image3,
            image4,
        },
      context: null
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  text-align: center;
  width:100%;
  display:flex;
  justify-content:center;
  align-content: center;
  align-items: flex-start;
  color:white;
  text-shadow: 4px 4px 6px rgb(0, 0, 0);
}
#container{
  margin-top:20%;
  width:100%;
  display:flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.tresc{
  width:60%;
}
#tlo2{
  position:absolute;
  padding:0;
  margin:0;
  z-index:-1;
}
.tresc{
}
h1{
    overflow: hidden;
    line-height: 20vh;
    font-size:6.5vw;
    margin: 0;
    padding:0;
    letter-spacing: .15em;
  }

  @media screen and (max-width: 900px) {
  #container{
  margin-top:40%;
  width:95%;
  margin-left:0;
  margin-right:0;
  padding:0;
  display:flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.tresc{
  width:90%;
  padding:0;
  margin:0;
}
#tlo2{
  position:absolute;
  padding:0;
  margin:0;
  z-index:-1;
}
  
}

</style>