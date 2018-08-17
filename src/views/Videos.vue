<template>
    <section class="videos">
       <div class="video-wrapper" :class="{margTop: $store.state.moveToTop}">
           <VideoPlayer/>
       </div>
       <div class="panel">
            <div @click="$router.go(-1)" class="goback center"><i class="icon-left-small"></i></div>
            <transition name="infoAnimation">
            <div id="info" class="info">
                    <div class="center" v-if="$store.state.name == 'crossroads'">
                        <h1>Crossroads Inn</h1>
                        <p>Game cinematic</p>
                        <p>sound designer, sound editor, mix & mastering </p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'carrefour'">
                        <h1>Carrefour</h1>
                        <h2>Back to School 2017</h2>
                        <p>TV commercial</p>
                        <p>sound designer, sound editor, recording engineer,mix & mastering </p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'jaguar'">
                        <h1>Jaguar</h1>
                        <p>Event movie</p>
                        <p>lead sound designer, sound editor, foley artist, mix & mastering </p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'orange'">
                        <h1>Orange</h1>
                        <h2>Serce i Rozum</h2>
                        <p>TV commercial</p>
                        <p>foley artist, supporting sound designer</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'orlen'">
                        <h1>Orlen</h1>
                        <h2>Efecta</h2>
                        <p>Sponsorship billboard</p>
                        <p>sound designer, mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'cien'">
                        <h1>Lidl</h1>
                        <h2>Cien</h2>
                        <p>Agency: GPD</p>
                        <p>Territory: France</p>
                        <p>music composer, music producer, musican, recording engineer, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'lenor'">
                        <h1>Lenor</h1>
                        <p>Agency: Grey</p>
                        <p>Territory: Eastern Europe</p>
                        <p>music composer, music producer, musican, recording engineer, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'lidl_italian'">
                        <h1>Lidl</h1>
                        <p>Agency: GPD</p>
                        <p>Territory: Europe</p>
                        <p>music producer, musican, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'pireel2016'">
                        <h1>Platige Image</h1>
                        <p>Showreel 2016</p>
                        <p>sound designer, mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'abarth'">
                        <h1>Abarth</h1>
                        <h2>Directir's cut</h2>
                        <p>foley artist, sound editor, sound designer</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'pi3dlive'">
                        <h1>Platige 3D live theatre</h1>
                        <h2>Promo video</h2>
                        <p>sound designer, recording engineer, sound editor, mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'toyota'">
                        <h1>Toyota</h1>
                        <p>TV commercial</p>
                        <p>sound editor, mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'chocolapin'">
                        <h1>Chocolapin</h1>
                        <p>Internet promo</p>
                        <p>music composer, musican, mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'axa'">
                        <h1>Axa</h1>
                        <p>Tv commercial</p>
                        <p>music composer, musican, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'jaguar_music'">
                        <h1>Jaguar</h1>
                        <p>Event movie</p>
                        <p>Territory: China</p>
                        <p>music composer, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'warka'">
                        <h1>Warka</h1>
                        <h2>Nowa etykieta</h2>
                        <p>Agency: BNA</p>
                        <p>Territory: Poland</p>
                        <p>music composer, musican, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'barbie'">
                        <h1>Fortuna Barbie</h1>
                        <p>Agency: Ambasada</p>
                        <p>Territory: Poland</p>
                        <p>music composer, musican, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'barbie'">
                        <h1>Fortuna Barbie</h1>
                        <p>Agency: Ambasada</p>
                        <p>Territory: Poland</p>
                        <p>music composer, musican, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'bachanalia'">
                        <h1>Bachanalia</h1>
                        <p>Short film</p>
                        <p>music composer, musican</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'cathedral'">
                        <h1>Cathedral</h1>
                        <p>Animated short film</p>
                        <p>Academy Award nominated 2002</p>
                        <p>music composer, musican</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'ibuprom'">
                        <h1>Ibuprom</h1>
                        <p>Agency: RED8</p>
                        <p>Territory: Poland</p>
                        <p>music composer, musican, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'peryskop'">
                        <h1>Ron Adams</h1>
                        <h2>Peryskop</h2>
                        <p>Sony Music Poland</p>
                        <p>music composer, lyrics author, musican, music producer, music mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'lego'">
                        <h1>LEGO</h1>
                        <h2>(All Lego series in Poland)</h2>
                        <p>sound designer, sound editor, recording engineer, music editor, mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'mikolaj'">
                        <h1>Video from Santa</h1>
                        <p><a href="https://www.elfisanta.uk/" target="_blank">https://www.elfisanta.uk/</a></p>
                        <p>foley artist, sound editor, supporting sound designer</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'triki'">
                        <h1>Kitchen Tricks</h1>
                        <p>TLC/Discovery Channel audition</p>
                        <p>sound designer, sound editor, dialog editor, audio restorator, mix & mastering</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'alivia'">
                        <h1>Alvia</h1>
                        <h2>War on cancer</h2>
                        <p>mobile game available on iTunes</p>
                        <p>sound designer</p>
                    </div>
                    <div class="center" v-if="$store.state.name == 'powerpass'">
                        <h1>Epic soccer</h1>
                        <p>mobile game</p>
                        <p>sound designer, music composer, recoding engineer, dialog editor</p>
                    </div>
                    <div @click="closeInfo()" id="abort" class="abort center"><i class="icon-cancel"></i></div>
            </div>
            </transition>
       </div>
    </section>
</template>
<script>

import VideoPlayer from './VideoPlayer';


export default {
  name: 'videos',
  mounted(){
    document.getElementById('info').classList.add('info-show');
  },
  methods:{
      closeInfo(){
          document.getElementById('info').classList.add('info-hide');
          document.getElementById('abort').classList.add('abort-rotation');
      }
  },
  components:{
      VideoPlayer
  }
}
</script>

<style lang="scss">
    .videos{
        color: white !important;
        margin-top:150px;
    }
    .margTop{
            margin-top: -20px;
    }   
    .video-wrapper{
        margin-top:5px;
    }
    .icon-left-small, .icon-cancel{
        font-size: 1.5em;
    }
    .panel{
        top:150px;
        width: 300px;
        height: 100vh;
        
    }
    .info{
        position: relative;
        text-align: center;
        top: -25px;
        z-index:10;
        width: 100vw;
        left: -100vw;
        

        h1{
            font-size: 1.3em;
            margin-top: 10px;
            margin-bottom: 0;
        }
        h2{
            font-size: 1.1em;
            margin:10px 0 0 0;
        }
        h3{
            font-size: 1em;
            font-weight: 700;
            margin:10px 0 0 0;
        }
        p{
            margin: 5px;
            padding: 0 20px;
           
        }
    }
    .info-show{
        animation: infoBounce 1s cubic-bezier(0.645, 0.045, 0.355, 1) 1s forwards;
    }

    .info-hide{
         animation: infoBounceOff 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    @keyframes infoBounce {
        from{
          left:-100vw;
        }
        to{
         
          left:0;  
        }
    }
    @keyframes infoBounceOff {
        from{
          left:0;
        }
        to{
         
          left:-100vw;  
        }
    }
    .goback{
        position: relative;
        width: 40px;
        height: 40px;
        border: 1px solid white;
        top: 20px;
        left:20px;
        border-radius: 50%;
        z-index:90;
        cursor: pointer;
    }

    .abort{
        width: 40px;
        height: 40px;
        border: 1px solid white;
        border-radius: 50%;
        left:100px;
        bottom: 100px;
        position: absolute;
        display: none;
        transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .abort:hover{
         transform: rotateZ(360deg);
    }
    @media screen and (min-width: 600px) {
        .videos{
        color: white !important;
        margin-top:0px;
        }
        
    }
    @media screen and (min-width: 1200px){
        .margTop{
            margin-top: -60px;
        } 
        .goback{
            position: absolute;
            top: 80px;
            left: 10px;
            
        }
        .info{
            position: absolute;
            top:70px;
            left:-400px;
            height: 100vh;;
            width: 300px;
            background-color: rgba(0,0,0,0.5);
            
        } 
        
         @keyframes infoBounce {
        from{
          left:-400px;
        }
        to{
         
          left:0;  
        }
    }
     .abort{
        display: flex;
        
    }
    .abort-rotation{
        transform: rotateZ(360deg);
    }
    } 
</style>