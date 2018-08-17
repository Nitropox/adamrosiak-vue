<template>
  <section class="home">
    <div class="myname">
     <h1>My name is Adam Rosiak</h1>
     <h2>I'M A MUSIC COMPOSER, SOUND DESIGNER, PRODUCER AND REMIX ARTIST LIVING IN WARSAW, POLAND.</h2>
     <h2></h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700");
.home{
  background-image: url('../assets/img/piano.jpg');
  background-size:cover ;
  background-position: center;
  color: #eeeeee;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  h1{
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
  }
  h2{
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
    text-transform: uppercase;
  }
}

.myname{
  margin-top: 120px;
  text-align: center;
  padding: 20px;
  width: 90vw;
  margin-left:auto;
  margin-right:auto;
}
@media screen and (min-width: 600px){
    .home{
    h1{
      font-size: 26px;
    }
    h2{
      font-size: 22px;
    }
  }
  .myname{
    width: 70vw;
  }
}
@media screen and (min-width: 900px){
    .home{
    h1{
      font-size: 30px;
    }
    h2{
      font-size: 28px;
    }
  }
  .myname{
    width: 70vw;
  }
}
@media screen and (min-width: 1200px){
  .home{
    h1{
      font-size: 36px;
    }
    h2{
      font-size: 32px;
    }
  }
  .myname{
    width: 60vw;
  }
}
</style>