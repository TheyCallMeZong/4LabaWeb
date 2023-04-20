<template>
  <div>
    <div class="stars"></div>
    <div class="twinkling"></div>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.stars, .twinkling {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url("../../public/images/stars.png") repeat top center;
  z-index: 0;
}

.twinkling {
  background-image: url("../../public/images/twinkling.png");
  animation: 3s twinkle infinite;
  animation-timing-function: linear;
}

@keyframes twinkle {
  from {backrgound-position: 0}
  to {background-position: -100px 0}
}

</style>