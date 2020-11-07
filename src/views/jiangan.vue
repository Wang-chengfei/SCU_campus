<template>
  <div class="jiangan">
    <Nav></Nav>
    <h2>Jiangan Campus</h2>
    <Bottom></Bottom>  
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Bottom from '../components/Bottom.vue'

export default {
  name: 'jiangan',
  components: {
    Nav,
    Bottom
  }
}

</script>
