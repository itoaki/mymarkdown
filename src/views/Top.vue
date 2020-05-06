<template>
  <div id="top">
    <div class="header">
      <img alt="MyMarkDown" src="../assets/logo.png" width="150" height="30">
      <span v-if="isLogin">ようこそ！{{ userData.displayName }}さん </span>
      <button v-if="isLogin" @click="logout">ログアウト</button>

    </div>
    <div class="content">
      <Home v-if="!isLogin"></Home>
      <Editor v-if="isLogin" :user="userData"></Editor>
    </div>
  </div>
</template>

<script>
import Home from '../components/Home.vue';
import Editor from '../components/Editor.vue';
import firebase from 'firebase';

export default {
  name: 'top',
  data() {
    return {
      isLogin: false,
      userData: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      }
    });
  },
  components: {
    Home,
    Editor,
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>
<style lang="scss">
  #top {
    // font-family: "Avenir", Arial, Helvetica, sans-serif;
    font-family: "Hiragino Kaku Gothic ProN","メイリオ", sans-serif;
  };
  .header {
    height: 5vh;
    margin: 0;
    background-color: white;
  }
  .content {
    height: 93vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
