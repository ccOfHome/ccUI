<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo />
    <Card imgSrc="favicon.ico" summary="大大撒旦撒法发"/>
    <br />
    <Card imgSrc="favicon.ico" summary="大大撒旦撒法发">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 565人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </Card>
    <br />
    <Card imgSrc="favicon.ico" :width="370" :imgHeight="90">
      发犯法腱反射发表
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 6门课</div>
          <div class="level">10965收藏</div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #2c3e50;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}

</style>
