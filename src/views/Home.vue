<template>
  <div class="home">
    <img alt="SiChuan University logo" src="../assets/logo.png" class="logo" />
    <div class="choose">
      <router-link to="/jiangan">江安校区</router-link>
      <code v-text="'  '"></code>
      <router-link to="/wangjiang">望江校区</router-link>
      <code v-text="'  '"></code>
      <router-link to="/huaxi">华西校区</router-link>
      <code v-text="'  '"></code>
      <router-link to="/history">川大校史</router-link>
      <code v-text="'  '"></code>
      <router-link to="/fellow">杰出校友</router-link>
    </div>
  </div>
</template>


<style scoped>
.logo {
  height: 300px;
}
.choose {
  font-size: 26px;
}
</style>
