<template>
  <div class="nav">
    <div class="above">
      <img src="../assets/logo.png" alt="" @click="returnIndex" />
    </div>
    <div class="below">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
        <el-tab-pane label="江安校区" name="jiangan"></el-tab-pane>
        <el-tab-pane label="望江校区" name="wangjiang"></el-tab-pane>
        <el-tab-pane label="华西校区" name="huaxi"></el-tab-pane>
        <el-tab-pane label="川大校史" name="history"></el-tab-pane>
        <el-tab-pane label="杰出校友" name="fellow"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
.above img {
  height: 160px;
  cursor: pointer;
}
.above {
  height: 160px;
  background-color: #ba2a17;
}
</style>


<script>
export default {
  name: "Nav",
  data() {
    return {
      activeName: this.$route.path.substr(1),
    };
  },
  methods: {
    handleClick(tab, event) {
      if (this.$route.path.substr(1) != this.activeName) {
        this.$router.push({ path: "/" + this.activeName });
      }
    },
    returnIndex(event) {
      this.$router.push({ path: "/" });
    },
  },
};
</script>