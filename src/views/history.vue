<template>
  <div class="history">
    <Nav></Nav>
    <h2>History</h2>
    <Bottom></Bottom>  
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Bottom from '../components/Bottom.vue'

export default {
  name: 'history',
  components: {
    Nav,
    Bottom
  }
}
</script>