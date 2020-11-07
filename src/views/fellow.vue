<template>
  <div class="fellow">
    <Nav></Nav>
    <h2>Fellow</h2>
    <Bottom></Bottom>  
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Bottom from '../components/Bottom.vue'

export default {
  name: 'fellow',
  components: {
    Nav,
    Bottom
  }
}
</script>