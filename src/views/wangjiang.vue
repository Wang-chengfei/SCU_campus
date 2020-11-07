<template>
  <div class="wangjiang">
    <Nav></Nav>
    <h2>Wangjiang Campus</h2>
    <Bottom></Bottom>  
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Bottom from '../components/Bottom.vue'

export default {
  name: 'wangjiang',
  components: {
    Nav,
    Bottom
  }
}
</script>