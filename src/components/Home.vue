<template>
<div class="home">
  <div>
    <img alt="MyMarkDown" src="../assets/logo.png">
  </div>
  <p class="concept">すぐに使える・簡単に使える<br>マークダウンエディタ</p>
  <div class="detail">
    <p style="font-size: 20px;">
      My Markdownはリアルタイムプレビューができる、シンプルなマークダウンエディタです。<br>
      Googleアカウントがあればすぐに使用することができます。
    </p>
    <div class="infomation">
      [お知らせ]<br>
      ・Twitterのアカウントでログインできるようになりました。<br>
      ・GitHubのアカウントでログインできるようになりました。<br>
      ・同じメールアドレスを使用して、複数のSNSでログインできるようになりました。<br>
      ・Control + s"(Macの場合は"Command + s")で保存できるようになりました。<br>
      [Comming Soon]<br>
      ・Alt + ↑↓"(Macの場合は"Option + ↑↓")でメモの切り替え<br>
      ・Control + Backspace"(Macの場合は"Command + delete")でメモの削除<br>
    </div>
  </div>

  <br>
  <div>
    <SimpleButton :text="'Googleアカウントでログイン'" @onclick="googleLogin"></SimpleButton>
    <SimpleButton :text="'GitHubアカウントでログイン'" @onclick="githubLogin"></SimpleButton>
    <SimpleButton :text="'Twitterアカウントでログイン'" @onclick="twitterLogin"></SimpleButton>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
import SimpleButton from './SimpleButton.vue';

export default {
  name: 'home',
  components: {
    SimpleButton,
  },
  methods: {
    googleLogin() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },
    twitterLogin() {
      firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider());
    },
    githubLogin() {
      firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
    },
  },
};
</script>
<style lang="scss" scoped>
  .home {
    width: 100%;
    text-align: center;
  }
  .concept {
    color: #696969;
    margin: 10px;
    font-size: 50px;
  }

  .detail {
    background-color: rgba(255,255,255,0.7);
  }

  .infomation {
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
