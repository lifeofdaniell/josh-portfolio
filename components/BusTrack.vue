<template>
  <div class="bus-track">
    <div class="bus-stop"></div>
    <div class="bus-stop"></div>
    <div class="bus-stop"></div>
    <div class="bus-stop"></div>
    <div class="bus-stop"></div>
    <div class="bus"></div>
  </div>
</template>

<script>
export default {

mounted() {
     this.$gsap.to('.bus', {
      left: '10vw',
      delay: 0.5
    })
}

}
</script>
<style>
.bus {
  left: 0vw;
  transition: all 800ms linear;
}
</style>
