<template>
  <section class="work"> 
    <div class="upper">
      <div class="buttons">
        <div class="work-button" v-on:click="click_all" :class="{ active_button: itemFilterKey == 'all' }">All</div>
        <div class="work-button" v-on:click="click_music" :class="{ active_button: itemFilterKey == 'music' }">Music</div>
        <div class="work-button" v-on:click="click_sound" :class="{ active_button: itemFilterKey == 'sound' }">Sound</div>
        <div class="work-button" v-on:click="click_game" :class="{ active_button: itemFilterKey == 'game' }">Game</div>
      </div>
    </div>
    <div class="lower">
      <transition-group name="fade">
        <img class="image list-item-complete" 
        v-for="(item,index) in $store.state.jobs"
        :key="index"
        :src="item.imgrc" 
        :alt="item.alt"
        :dataName="item.name"
        :dataVideoUrl="item.videoUrl"
        :dataBool="item.dataBool"
        v-on:click="clickAction"
        />
      </transition-group>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
export default {
  name: 'work',
  data(){
    return{
      cases: [
        {
        name: 'jaguar', 
        imgrc: require('../assets/img/jaguar.jpg'), 
        alt: "jaguar", 
        category: 'sound', 
        videoUrl: require('../assets/videos/jaguar.mp4'), 
        dataBool: 1
      },
        
     
      {
        name: 'pireel2016', 
        imgrc: require('../assets/img/pireel2016.jpg'), 
        alt: "platige image reel", 
        category: 'sound', 
        videoUrl: require('../assets/videos/pireel2016.mp4'), 
        dataBool: 1
      },
      {
        name: 'carrefour', 
        imgrc: require('../assets/img/carrefour.jpg'),
        alt: "carrefour napoleon",
        category:'sound', 
        videoUrl: require('../assets/videos/carrefour.mp4'), 
        dataBool: 1
      },
        {
        name: 'cien',
        imgrc: require('../assets/img/cien.jpg'),
        alt: "lidl cien",
        category: 'music',
        videoUrl: require('../assets/videos/cien.mp4'),
        dataBool: 1
      }, 
       {
        name: 'crossroads', 
        imgrc: require('../assets/img/crossroads.jpg'), 
        alt: "crossroads inn", 
        category: 'sound', 
        videoUrl: require('../assets/videos/crossroads.mp4'), 
        dataBool: 0
      },
      
      {
        name: 'abarth', 
        imgrc: require('../assets/img/abarth.jpg'), 
        alt: "abarth", 
        category: 'sound', 
        videoUrl: require('../assets/videos/abarth2.mp4'), 
        dataBool: 1
      },
      {
        name: 'pi3dlive', 
        imgrc: require('../assets/img/pi3dlive.jpg'), 
        alt: "platige 3d live theatre", 
        category: 'sound', 
        videoUrl: require('../assets/videos/pi3dlive.mp4'), 
        dataBool: 1
      },
      {
        name: 'jaguar_music',
        imgrc: require('../assets/img/jaguar_music.jpg'),
        alt: "jaguar music",
        category: 'music',
        videoUrl: require('../assets/videos/jaguar_music.mp4'),
        dataBool: 0
      },
      {
        name: 'alivia',
        imgrc: require('../assets/img/alivia.jpg'),
        alt: "alivia game",
        category: 'game',
        videoUrl: require('../assets/videos/alivia.mp4'),
        dataBool: 0
      },   
      {
        name: 'lidl_italian',
        imgrc: require('../assets/img/lidl_italian.jpg'),
        alt: "lidl italia",
        category: 'music',
        videoUrl: require('../assets/videos/lidl_italian.mp4'),
        dataBool: 0
      },
      {
        name: 'lego',
        imgrc: require('../assets/img/lego.jpg'),
        alt: "lego",
        category: 'sound',
        videoUrl: require('../assets/videos/lego.mp4'),
        dataBool: 0
      },
      {
        name: 'orange', 
        imgrc: require('../assets/img/orange.jpg'),
        alt: "orange" , 
        category: 'sound', 
        videoUrl: require('../assets/videos/orange.mp4'),
        dataBool: 1
      },
      {
        name: 'orlen', 
        imgrc: require('../assets/img/orlen.jpg'),
        alt: "orlen efecta",
        category: 'sound', 
        videoUrl: require('../assets/videos/orlen.mp4'), 
        dataBool: 0
      },
      
      {
        name: 'axa',
        imgrc: require('../assets/img/axa.jpg'),
        alt: "axa",
        category: 'music',
        videoUrl: require('../assets/videos/axa.mp4'),
        dataBool: 0
      },
      
      {
        name: 'toyota',
        imgrc: require('../assets/img/toyota.jpg'),
        alt: "lidl cien",
        category: 'sound',
        videoUrl: require('../assets/videos/toyota.mp4'),
        dataBool: 0
      },
      {
        name: 'warka',
        imgrc: require('../assets/img/warka.jpg'),
        alt: "warka",
        category: 'music',
        videoUrl: require('../assets/videos/warka.mp4'),
        dataBool: 1
      },
      {
        name: 'powerpass',
        imgrc: require('../assets/img/powerpass.jpg'),
        alt: "powerpass game",
        category: 'game',
        videoUrl: require('../assets/videos/powerpass.mp4'),
        dataBool: 1
      },

      {
        name: 'barbie',
        imgrc: require('../assets/img/barbie.jpg'),
        alt: "barbie",
        category: 'music',
        videoUrl: require('../assets/videos/barbie.mp4'),
        dataBool: 1
      },
      {
        name: 'ibuprom',
        imgrc: require('../assets/img/ibuprom.jpg'),
        alt: "ibuprom",
        category: 'music',
        videoUrl: require('../assets/videos/ibuprom.mp4'),
        dataBool: 1
      },
      {
        name: 'bachanalia',
        imgrc: require('../assets/img/bachanalia.jpg'),
        alt: "bachanalia",
        category: 'music',
        videoUrl: require('../assets/videos/bachanalia.mp4'),
        dataBool: 1
      },
      {
        name: 'cathedral',
        imgrc: require('../assets/img/cathedral.jpg'),
        alt: "cathedral",
        category: 'music',
        videoUrl: require('../assets/videos/cathedral.mp4'),
        dataBool: 0
      },
      {
        name: 'chocolapin',
        imgrc: require('../assets/img/chocolapin.jpg'),
        alt: "chocolapin",
        category: 'music',
        videoUrl: require('../assets/videos/chocolapin.mp4'),
        dataBool: 0
      },
      {
        name: 'peryskop',
        imgrc: require('../assets/img/peryskop.jpg'),
        alt: "peryskop",
        category: 'music',
        videoUrl: require('../assets/videos/peryskop.mp4'),
        dataBool: 1
      },
      {
        name: 'mikolaj',
        imgrc: require('../assets/img/mikolaj.jpg'),
        alt: "mikolaj",
        category: 'sound',
        videoUrl: require('../assets/videos/mikolaj.mp4'),
        dataBool: 0
      },
      {
        name: 'triki',
        imgrc: require('../assets/img/triki.jpg'),
        alt: "mikolaj",
        category: 'sound',
        videoUrl: require('../assets/videos/triki.mp4'),
        dataBool: 0
      },
      {
        name: 'lenor',
        imgrc: require('../assets/img/lenor.jpg'),
        alt: "lenor",
        category: 'music',
        videoUrl: require('../assets/videos/lenor.mp4'),
        dataBool: 0
      },
      
     
      ],
      itemFilterKey: 'all',
      
    }
  },
  methods: {
    ...mapActions(['deployItems', 'initWork', 'showVideo','assignMoveToTop', 'assignName']),
    
    ...mapGetters(['getJobs', 'getVideo']),
    click_all(){
      this.getJobs();
      this.deployItems(this.cases);
      this.itemFilterKey='all';
    },
    click_music(){
      const arr = this.cases.filter((item) => item.category ==='music')
      this.deployItems(arr);
      this.getJobs();
      this.itemFilterKey='music';
    },
    click_sound(){
      this.itemFilterKey='sound';
      const arr = this.cases.filter((item) => item.category === 'sound')
      this.deployItems(arr);
      this.getJobs();
    },
    click_game(){
      this.itemFilterKey='game';
      const arr = this.cases.filter((item) => item.category === 'game')
      this.deployItems(arr);
      this.getJobs();
    },
    clickAction(event){
      const e = event.target.attributes.dataVideoUrl.nodeValue;
      this.showVideo(e);
      const e2 = event.target.attributes.dataBool.nodeValue;
      this.assignMoveToTop(e2);
      const e3 = event.target.attributes.dataName.nodeValue;
     this.assignName(e3);
    }
  },
  created(){
    this.itemFilterKey='all';
    this.initWork(this.cases);
  }
}
</script>

<style lang='scss'>
  .work{
    background-color: #000;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
  }
  .upper{
    margin-top: 150px;
  }

  .buttons{
    width: 100vw;
    display:inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .work-button{
    padding: 10px 10px;
    border: 5px solid white;
    background-color: #eeeeee;
    border-radius: 10px;
    width: auto;
    margin: 0 10px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'pi', sans-serif;
    font-weight: 400;
    font-size: 1.1em;
    cursor: pointer;
  }

  .active_button{
    color: #eeeeee;
    background-color: #000;
  }
  .lower{
    margin-top: 20px;
    text-align: center;
  }
.image{
  width: 100%;
  display: inline-block;
  cursor: pointer;
}



.flip-list-move {
  opacity:100;
  transition: all .2s;
}



.list-complete-item {
  transition: all 1s;
  display: inline-flex;
  
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  display:none;
}
@media screen and (min-width: 600px){
  .upper{
    margin-top: 90px;
  }
  .work-button{
    padding: 10px 20px;
    border-radius: 10px;
    width: 100px;
    margin: 0 10px;
    font-size: 1.4em;
  }
  .image{
    width:25%;
  }
}

@media screen and (min-width: 900px){
  .image{
    width:25%;
  }
}
</style>