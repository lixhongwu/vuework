<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  let htmlWidth = document.documentElement.clentWidth || document.body.clientWidth;
  let htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 10 +'px';
  window.addEventListener('resize',(e) => {
    let htmlWidth = document.documentElement.clentWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 +'px';
  });
  export default {
  name: 'App'

}
</script>

<style>

</style>
