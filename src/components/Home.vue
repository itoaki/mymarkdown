<template>
  <div id="home">
    <v-content>
      <v-container>
        <v-layout row>
          <v-flex md24>
            <img alt="MyMarkDown" src="../assets/logo.png">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex md24>
            <v-btn color="info" @click="googleLogin">Googleアカウントでログイン</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to MyMarkdown',
    };
  },
  methods: {
    googleLogin() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },
  },
};
</script>
<style lang="scss" scoped>
  .row {
    text-align:center;
  }
</style>
