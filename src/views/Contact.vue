<template>
    <section class="contact">
       <div class="kwadruny center">
         <p>Contact me at:</p>
         <p><a href="mailto:adam@adamrosiak.com">adam@adamrosiak.com</a></p>
       </div>
       <footer>
         <p>Created by Adam Rosiak <a href="http://mildcode.com" target="_blank">(mildcode.com)</a> thx to awesomnes of Vue.js!</p>
       </footer>
    </section>
</template>
<script>
export default {
  name: 'contact'
}
</script>

<style lang='scss'>
  .contact{
    background-color: #000;
    height: 100vh;
    width: 100vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    overflow: auto;
    }

    .kwadruny{
      margin-top: 150px;
      font-size: 2em;
      color: #fff;
      text-transform: uppercase;
      p{
        margin: 10px;
      }
    }
     footer{
       position: absolute;
       color: #fff;
       bottom:10px;
     }
</style>