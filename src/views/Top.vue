<template>
  <div id="top">
    <Home v-if="!isLogin"></Home>
    <Editor v-if="isLogin" :user="userData"></Editor>
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
};
</script>
<style lang="scss">
  #top {
    font-family: "Avenir", Arial, Helvetica, sans-serif
  };
</style>
