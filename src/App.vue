<template>
  <div id="app" class="container-fluid">
    <div id="top-bar" class="top-bar" v-bind:style="{backgroundColor:bgColor}">
      <div id="nav-logo" @click="getWindowWidth">
          <router-link to="/">ADAMROSIAK.COM</router-link>
      </div>
      <div id="nav-right">
          <div id="burger" @click="show = !show" v-bind:class="{change: show}"> 
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
          </div>  
      </div>              
    </div><!--top-bar end-->
    <transition name="menu-show">
    <nav v-if="show" id="menux" class="menux">                            
      <ul >                   
        <li @click="getWindowWidth"><router-link to="/about" v-bind:style="{color: activeColor}" >About</router-link></li>
        <li @click="getWindowWidth"><router-link to="/work" v-bind:style="{color: activeColor}">Work</router-link></li>
        <li @click="getWindowWidth"><router-link to="/contact" v-bind:style="{color: activeColor}">Contact</router-link></li>
      </ul>
    </nav>
    </transition>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app',
  data(){
    return{
      show: false,
      windowWidth: 0,
      activeColor: "white",
      bgColor: "rgba(0,0,0,1)"
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      //Init
      this.getWindowWidth()
      
  })},
  methods:{
    //needed for responsive navbar
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
        if(this.windowWidth < 600) {
          this.show = false;
          this.activeColor = 'white';
          this.bgColor = 'rgba(0,0,0,1)'
        }else{
          this.show = true;
          if(this.$route.name==='about' && this.windowWidth >= 1200){
            this.activeColor = 'black';
            this.bgColor = 'rgba(0,0,0,0)';
          }else{
            this.activeColor = 'white';
            this.bgColor = 'rgba(0,0,0,0.5)';
          }
        }
      },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  }
    
}
</script>
<style lang="scss" src="./assets/css/style.scss">
</style>
