<template>
  <div class="huaxi">
    <Nav></Nav>
    <h2>Huaxi Campus</h2>
    <Bottom></Bottom>  
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Bottom from '../components/Bottom.vue'

export default {
  name: 'huaxi',
  components: {
    Nav,
    Bottom
  }
}
</script>