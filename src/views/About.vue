<template>
  <section class="about">
    <div class="left-column">
    </div>
    <div class="right-column">
      <main class="content-wrapper">
        <p>My professional career began in 2001 when I established cooperation with Platige Image stuido as a freelance composer of music for television ads. The same year, I wrote the music for the short film "The Cathedral" by Tomek Baginski, which was later nominated for the Academy Award in 2003. </p>
        <p>I have worked with most of the major advertising agencies around the world, making music broadcast for globally recognized brands such as Nescafe, Gillette, Duracell, Lenor, Panadol, Tchibo, Axa, Lidl as well as for Polish Companies: PZU, Polkomtel, Grupa Zywiec, Kompania Piwowarska and more. </p>
        <p>I have also worked as a producer and remixer for music labels: Modiba Recordings (NY/USA), Magnatune (CA/USA), Magic Records (Universal Music Poland) and Sony Music Poland.</p>
        <p> My strong point is being open to music in its variety of forms and styles. I can say I love music as a whole and my range of interests is very wide from the world music, classical, jazz, electronic to latest in trance, progressive and all kinds of new stuff.</p>
      </main>
    </div>
  </section>
</template>

<style lang='scss'>
  .about{
    background-color: #000;
    height: 100vh;
    width: 100vw;
    display:flex;
    flex-direction: row;
    position: fixed;
    overflow: auto;
    }
  .left-column{
    width:0;
    height: 100%;
  }
  .right-column{
    width:100%;
    color: #fff;
  }

  .content-wrapper{
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    margin-top: 100px;
    font-size: 16px;
    padding: 20px 0;
    width:80vw;
    margin-left: auto;
    margin-right: auto;
  }

@media screen and (min-width: 1200px){
  .about{
    background-color: #fff;
    
  }
   .left-column{
    width:200px;
    height: 100vh;
    background-color: #000;
  }
   .right-column{
    width:85%;
    color: #000;
  }
    .content-wrapper{
    font-weight: 400;
    margin-top: 100px;
    font-size: 20px;
    padding: 20px 0;
    width:40vw;
  }
}
</style>
