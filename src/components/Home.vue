<template>
<div class="home">
  <button @click="googleLogin">Googleアカウントでログイン</button>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'home',
  data() {
    return {
      value: 'aaaaaaaaaaaaaaa¥naaaaaaaaaaaaaaa¥naaaaaaaaaaaaaaa¥naaaaaaaaaaaaaaa¥n',
    };
  },
  methods: {
    googleLogin() {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    },
  },
};
</script>
<style lang="scss" scoped>
  .row {
    text-align:center;
  }
</style>
