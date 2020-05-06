<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
};
</script>
<style lang="scss">
  body {
      /* 画像ファイルの指定 */
      background-image: url("./assets/home_backgroung.jpg");

      /* 画像を常に天地左右の中央に配置 */
      background-position: center center;

      /* 画像をタイル状に繰り返し表示しない */
      background-repeat: no-repeat;

      /* コンテンツの高さが画像の高さより大きい時、動かないように固定 */
      background-attachment: fixed;

      /* 表示するコンテナの大きさに基づいて、背景画像を調整 */
      background-size: cover;

      /* 背景画像が読み込まれる前に表示される背景のカラー */
      background-color: #464646;

      margin: 0%;
  }

  #app {
      margin: 0;
  }

</style>
