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
            <!-- お知らせ窓を作る -->
            <v-textarea
              prepend-inner-icon="comment"
              label="お知らせ"
              height=100
              :value="value"
              auto-grow
              disabled
            ></v-textarea>
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
