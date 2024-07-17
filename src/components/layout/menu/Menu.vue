<template>
  <div class="menu-box">
    <h3 class="user-info">
      <img src="@/assets/logo.svg" width="40" height="40" alt="" />
    </h3>
    <ul class="hot-route-list">
      <li><img src="@/assets/img/chat.png" alt="" /></li>
      <li><img src="@/assets/img/user.png" alt="" /></li>
      <li><img src="@/assets/img/mgt.png" alt="" /></li>
      <li @click="showFileTc">
        <img src="@/assets/img/file.png" alt="" />
      </li>
      <li><img src="@/assets/img/friend.png" alt="" /></li>
      <li><img src="@/assets/img/meta-line.png" alt="" /></li>
      <li @click="showSearchTc">
        <img src="@/assets/img/search.png" alt="" />
      </li>
    </ul>

    <ul class="footer-mgt-list">
      <li><img src="@/assets/img/mp.png" alt="" /></li>
      <li><img src="@/assets/img/phone.png" alt="" /></li>
      <li><img src="@/assets/img/list.png" alt="" /></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const showFileTc = () => {
  console.log('showFileTc')

  // window.open('https://www.baidu.com/')
  window.electron.createWindow()
}

const showSearchTc = () => {
  console.log('showSearchTc')
  window.electron.ipcRenderer.send('show-search-tc', 'search args')
}
</script>

<style scoped lang="scss">
.menu-box {
  width: 60px;
  height: 100vh;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  padding: 60px 10px 30px;
  background: #e1e3e5;
  .user-info {
    margin: 0 auto;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
  }
  .hot-route-list {
    padding: 40px 5px 60px;
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
    left: 10px;
    padding: 0 5px;
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
