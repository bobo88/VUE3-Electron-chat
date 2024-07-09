<template>
  <div class="menu-box">
    <h3><img src="@/assets/logo.svg" width="30" height="30" alt="" /></h3>
    <ul class="hot-route-list">
      <li><img src="@/assets/img/chat.png" alt="" /></li>
      <li><img src="@/assets/img/user.png" alt="" /></li>
      <li><img src="@/assets/img/mgt.png" alt="" /></li>
      <li><img src="@/assets/img/file.png" alt="" /></li>
      <li><img src="@/assets/img/friend.png" alt="" /></li>
      <li><img src="@/assets/img/meta-line.png" alt="" /></li>
      <li><img src="@/assets/img/search.png" alt="" /></li>
    </ul>

    <ul class="footer-mgt-list">
      <li><img src="@/assets/img/mp.png" alt="" /></li>
      <li><img src="@/assets/img/phone.png" alt="" /></li>
      <li><img src="@/assets/img/list.png" alt="" /></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import MenuList from "./MenuList.vue";
</script>

<style scoped lang="scss">
.menu-box {
  width: 60px;
  height: 100vh;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  padding: 60px 15px 30px;
  background: #e1e3e5;
  .hot-route-list {
    padding: 60px 0;
    li {
      margin-bottom: 20px;
      padding: 2px 2px;
      img {
        width: 26px;
        height: 26px;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .footer-mgt-list {
    position: absolute;
    bottom: 20px;
    left: 15px;
    li {
      margin-bottom: 20px;
      padding: 2px 2px;
      img {
        width: 26px;
        height: 26px;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
